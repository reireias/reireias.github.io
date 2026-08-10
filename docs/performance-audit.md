# Performance audit

## Purpose

Performance audits detect regressions in pull requests. The final Lighthouse 95+
target in Issue #561 is verified against the deployed production site separately;
the local CI audit is a stable baseline for comparing code changes.

## Local CI audit

Run the same audit used by GitHub Actions:

```bash
pnpm audit:performance
```

The command generates the static site, serves `dist` without compression or cache,
and audits every configured route with mobile throttling. Each route is measured
three times, and Unlighthouse selects the median Lighthouse run. The result table
includes Performance, SEO, FCP, LCP, TBT, and CLS.

The regression budgets are deliberately separated by route type:

- Main public routes: Performance 60+
- `/sandbox/**`: Performance 55+
- All routes: Accessibility and Best Practices 100
- Indexable routes (`/`, `/articles/`, `/experience/`, `/profile/`, `/skills/`):
  SEO 100

Sandbox pages contain experimental code and are not part of the final 95+ target,
and migration, sandbox, and template pages are intentionally marked `noindex`.
Lighthouse lowers the SEO score for `noindex`, so those routes are excluded only
from the SEO score gate; their other category and performance budgets still prevent
major regressions. The budgets should be raised in small steps after improvements
consistently pass multiple CI runs.

GitHub Actions uploads `.unlighthouse/` as the `unlighthouse-report` artifact and
adds the page-by-page table to the job summary.

## Local and production roles

The local server intentionally disables caching and compression. This makes pull
request comparisons repeatable, but produces lower Performance scores than the
deployed site. Production uses GitHub Pages and Cloudflare delivery, including gzip
or Brotli compression and browser caching, so local and production scores must not
be compared as if their delivery conditions were identical.

After deployment, audit the main public routes multiple times under the same mobile
settings and use the median result. Confirm response compression and cache headers
at the same time. Record the production scores and Core Web Vitals-like metrics in
Issue #561; do not use a single run as the completion result.
