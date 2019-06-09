/* eslint no-console: 0 */
const fs = require('fs')
const qs = require('qs')
const axios = require('axios')
const dateFormat = require('dateformat')
require('dotenv').config()

const LIMIT = 10
const TARGET_URL = process.argv[2]
const VERSION = process.argv[3]
const PAGE_SPEED_INSIGHTS_URL =
  'https://www.googleapis.com/pagespeedonline/v5/runPagespeed'

const waitDeploy = async () => {
  let count = 0
  while (count < LIMIT) {
    const res = await axios.get(TARGET_URL)
    if (res.data.indexOf(VERSION) > 0) {
      return true
    }
    await new Promise(resolve => setTimeout(resolve, 60 * 1000))
    count += 1
  }
  return false
}

const saveJsonFile = (obj, client) => {
  const current = new Date()
  const dateString = dateFormat(current, 'yyyymmddhhMMss')
  const path = `./tmp/raw/${client}-raw-${dateString}-${VERSION}.json`
  fs.writeFileSync(path, JSON.stringify(obj))
  const lhPath = `./tmp/${client}-lh-${dateString}-${VERSION}.json`
  fs.writeFileSync(lhPath, JSON.stringify(obj.lighthouseResult))
}

const main = async () => {
  if (await waitDeploy()) {
    ;['desktop', 'mobile'].forEach(async client => {
      const params = {
        url: TARGET_URL,
        locale: 'ja',
        category: [
          'accessibility',
          'best-practices',
          'performance',
          'pwa',
          'seo'
        ],
        strategy: client
      }
      if (process.env.PAGE_SPEED_INSIGHTS_URL) {
        params.key = process.env.PAGE_SPEED_INSIGHTS_URL
      }
      const result = await axios.get(PAGE_SPEED_INSIGHTS_URL, {
        params: params,
        paramsSerializer: params =>
          qs.stringify(params, { arrayFormat: 'repeat' })
      })

      if (result.status !== 200) {
        console.error(result)
        throw new Error('Insight failed.')
      }

      saveJsonFile(result.data, client)
    })
  } else {
    throw new Error('Not deployed yet.')
  }
}

;(async () => {
  try {
    await main()
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err)
  }
})()
