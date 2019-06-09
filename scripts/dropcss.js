/* eslint no-console: 0 */
const fs = require('fs')
const dropcss = require('dropcss')
const cheerio = require('cheerio')

const htmlPath = './dist/index.html'
const html = fs.readFileSync(htmlPath).toString()
const $ = cheerio.load(html, { decodeEntities: false })
$('style').each((_, element) => {
  const css = element.children[0].data
  const cleaned = dropcss({
    html,
    css
  })
  element.children[0].data = cleaned.css
})
fs.writeFileSync(htmlPath, $.html())
