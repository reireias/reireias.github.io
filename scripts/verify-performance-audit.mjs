import { appendFile, readFile } from 'node:fs/promises'
import process from 'node:process'

const REPORT_ROOT = '.unlighthouse/reports'
const PUBLIC_PERFORMANCE_BUDGET = 60
const SANDBOX_PERFORMANCE_BUDGET = 55

const formatMetric = (audit, divisor = 1, suffix = '') => {
  if (typeof audit?.numericValue !== 'number') return 'n/a'

  return `${Math.round((audit.numericValue / divisor) * 100) / 100}${suffix}`
}

const getReportPath = (routePath) => {
  const relativePath = routePath === '/' ? '' : routePath.replace(/^\//, '')
  return `${REPORT_ROOT}/${relativePath}lighthouse.json`
}

const getBudget = (routePath) =>
  routePath.startsWith('/sandbox/') || routePath === '/sandbox/'
    ? SANDBOX_PERFORMANCE_BUDGET
    : PUBLIC_PERFORMANCE_BUDGET

const simpleReports = JSON.parse(
  await readFile('.unlighthouse/ci-result.json', 'utf8')
)

if (!Array.isArray(simpleReports) || simpleReports.length === 0) {
  throw new Error('Unlighthouse did not produce any route results')
}

const rows = await Promise.all(
  simpleReports.map(async (simpleReport) => {
    if (
      typeof simpleReport.path !== 'string' ||
      !Number.isFinite(simpleReport.performance)
    ) {
      throw new Error('Unlighthouse produced an invalid route result')
    }

    const report = JSON.parse(
      await readFile(getReportPath(simpleReport.path), 'utf8')
    )
    const budget = getBudget(simpleReport.path)

    return {
      path: simpleReport.path,
      performance: simpleReport.performance * 100,
      budget,
      fcp: formatMetric(report.audits['first-contentful-paint'], 1000, 's'),
      lcp: formatMetric(report.audits['largest-contentful-paint'], 1000, 's'),
      tbt: formatMetric(report.audits['total-blocking-time'], 1, 'ms'),
      cls: formatMetric(report.audits['cumulative-layout-shift']),
    }
  })
)

const markdown = [
  '## Unlighthouse performance audit',
  '',
  'Scores and metrics use the median Lighthouse run from three mobile samples.',
  '',
  '| Route | Performance | Budget | FCP | LCP | TBT | CLS |',
  '| --- | ---: | ---: | ---: | ---: | ---: | ---: |',
  ...rows.map(
    ({ path, performance, budget, fcp, lcp, tbt, cls }) =>
      `| \`${path}\` | ${Math.round(performance)} | ${budget} | ${fcp} | ${lcp} | ${tbt} | ${cls} |`
  ),
  '',
].join('\n')

console.log(markdown)

if (process.env.GITHUB_STEP_SUMMARY) {
  await appendFile(process.env.GITHUB_STEP_SUMMARY, markdown)
}

const failures = rows.filter(({ performance, budget }) => performance < budget)

if (failures.length > 0) {
  const details = failures
    .map(
      ({ path, performance, budget }) => `${path}: ${performance} < ${budget}`
    )
    .join(', ')
  throw new Error(`Performance budget failed: ${details}`)
}
