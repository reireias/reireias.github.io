import VuetifyLoaderPlugin from 'vuetify-loader/lib/plugin'
import pkg from './package'

export default {
  mode: 'universal',
  head: {
    title: pkg.name,
    htmlAttrs: {
      lang: 'ja'
    },
    meta: [
      {
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: pkg.description
      },
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: 'reireias portfolio'
      },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://reireias.github.io'
      },
      { hid: 'og:title', property: 'og:title', content: 'reireias portfolio' },
      {
        hid: 'og:description',
        property: 'og:description',
        content: pkg.description
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://reireias.github.io/ogp.png'
      },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image'
      },
      {
        hid: 'twitter:site',
        name: 'twitter:site',
        content: '@reirei_As'
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: pkg.name
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: pkg.description
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: 'https://reireias.github.io/ogp.png'
      },
      {
        hid: 'source:version',
        name: 'source:version',
        content: process.env.TRAVIS_COMMIT
      }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      }
    ]
  },
  plugins: ['@/plugins/vuetify'],
  css: ['~/assets/style/app.styl'],
  loading: { color: '#3B8070' },
  build: {
    extractCSS: true,
    transpile: ['vuetify/lib'],
    plugins: [new VuetifyLoaderPlugin()],
    loaders: {
      stylus: {
        import: ['~assets/style/variables.styl']
      }
    },
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
