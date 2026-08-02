import pkg from './package.json'

export default defineNuxtConfig({
  ssr: true,
  telemetry: false,
  app: {
    head: {
      title: 'reireias.dev',
      htmlAttrs: {
        lang: 'ja',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: pkg.description },
        {
          property: 'og:site_name',
          content: 'reireias portfolio',
        },
        { property: 'og:type', content: 'website' },
        {
          property: 'og:url',
          content: 'https://reireias.dev',
        },
        {
          property: 'og:title',
          content: 'reireias portfolio',
        },
        {
          property: 'og:description',
          content: pkg.description,
        },
        {
          property: 'og:image',
          content: 'https://reireias.dev/ogp.png',
        },
        {
          name: 'twitter:card',
          content: 'summary_large_image',
        },
        {
          name: 'twitter:site',
          content: '@reirei_As',
        },
        {
          name: 'twitter:title',
          content: 'reireias.dev',
        },
        {
          name: 'twitter:description',
          content: pkg.description,
        },
        {
          name: 'twitter:image',
          content: 'https://reireias.dev/ogp.png',
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
  },
  css: ['@/assets/app.scss'],
  modules: ['vuetify-nuxt-module'],
  vuetify: {
    moduleOptions: {/* module specific options */},
    vuetifyOptions: {
      theme: {
        defaultTheme: 'dark',
        themes: {
          dark: {
            colors: {
              background: '#272822',
              surface: '#363636',
              primary: '#a6e22e', // green
              accent: '#ae81ff', // purple
              secondary: '#66d9ef', // cyan
              success: '#a6e22e', // green
              info: '#e6db74', // yellow
              warning: '#fd971f', // orange
              error: '#f92672', // red
            },
          },
          light: {
            colors: {
              primary: '#1976D2',
              accent: '#e91e63',
              secondary: '#30b1dc',
              success: '#4CAF50',
              info: '#2196F3',
              warning: '#FB8C00',
              error: '#FF5252',
            },
          },
        },
      },
    },
  },
  compatibilityDate: '2024-04-03',
})
