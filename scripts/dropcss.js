/* eslint no-console: 0 */
const fs = require('fs')
const dropcss = require('dropcss')

const html = fs.readFileSync('./dist/index.html').toString()

fs.readdirSync('./dist/_nuxt').forEach(file => {
  if (file.endsWith('.css')) {
    const path = `./dist/_nuxt/${file}`
    const css = fs.readFileSync(path).toString()

    const cleaned = dropcss({
      html,
      css
    })

    fs.writeFileSync(path, cleaned.css)
  }
})
