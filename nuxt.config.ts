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
  css: ['@/assets/app.css'],
  modules: ['@nuxt/image', '@nuxt/ui'],
  colorMode: {
    preference: 'dark',
    fallback: 'dark',
  },
  compatibilityDate: '2024-04-03',
})
