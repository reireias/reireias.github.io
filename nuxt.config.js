import pkg from './package'

export default {
  mode: 'universal',
  head: {
    title: 'reireias.dev',
    htmlAttrs: {
      lang: 'ja',
    },
    meta: [
      {
        charset: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        hid: 'description',
        name: 'description',
        content: pkg.description,
      },
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: 'reireias portfolio',
      },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://reireias.github.io',
      },
      { hid: 'og:title', property: 'og:title', content: 'reireias portfolio' },
      {
        hid: 'og:description',
        property: 'og:description',
        content: pkg.description,
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://reireias.github.io/ogp.png',
      },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        hid: 'twitter:site',
        name: 'twitter:site',
        content: '@reirei_As',
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: 'reireias.dev',
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: pkg.description,
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: 'https://reireias.github.io/ogp.png',
      },
      {
        hid: 'source:version',
        name: 'source:version',
        content: process.env.TRAVIS_COMMIT,
      },
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico',
      },
    ],
  },
  plugins: ['@/plugins/composition-api'],
  css: [],
  loading: { color: '#3B8070' },
  pageTransition: 'page',
  modules: ['nuxt-webfontloader'],
  buildModules: ['@nuxtjs/vuetify', '@nuxt/typescript-build'],
  vuetify: {
    customVariables: ['~/assets/app.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: '#a6e22e', // green
          accent: '#ae81ff', // purple
          secondary: '#66d9ef', // cyan
          success: '#a6e22e', // green
          info: '#e6db74', // yellow
          warning: '#fd971f', // orange
          error: '#f92672', // red
        },
        light: {
          primary: '#1976D2',
          accent: '#e91e63',
          secondary: '#30b1dc',
          success: '#4CAF50',
          info: '#2196F3',
          warning: '#FB8C00',
          error: '#FF5252',
        },
      },
      options: {
        customProperties: true,
      },
    },
  },
  webfontloader: {
    google: {
      families: ['Roboto Condensed:400'],
    },
  },
  build: {
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        })
      }
    },
  },
}
