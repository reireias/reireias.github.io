/* eslint no-console: 0 */
const fs = require('fs')
const { JSDOM } = require('jsdom')

const htmlPath = './dist/index.html'
const html = fs.readFileSync(htmlPath).toString()
const document = new JSDOM(html).window.document
const css = []
fs.readdirSync('./dist/_nuxt').forEach(path => {
  if (path.endsWith('.css')) {
    css.push(path)
    const link = document.querySelector(`link[href='/_nuxt/${path}']`)
    if (!link) {
      const newLink = document.createElement('link')
      newLink.setAttribute('rel', 'preload')
      newLink.setAttribute('href', `/_nuxt/${path}`)
      newLink.setAttribute('as', 'style')
      const head = document.querySelector('head')
      head.appendChild(newLink)
    }
  }
})
fs.writeFileSync(htmlPath, document.documentElement.outerHTML)
