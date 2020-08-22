import colors from 'vuetify/es5/util/colors'
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
  transition: 'page',
  modules: ['nuxt-webfontloader'],
  buildModules: ['@nuxtjs/vuetify', '@nuxt/typescript-build'],
  vuetify: {
    customVariables: ['~/assets/app.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: '#1eb980',
          secondary: '#045d56',
          accent: '#72deff',
          info: '#b15dff',
          warning: '#ffcf44',
          error: '#ff6859',
        },
        light: {
          primary: '#268bd2',
          accent: colors.grey.darken3,
          secondary: '#2aa198',
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
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
