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
        {
          property: 'og:site_name',
          content: 'reireias portfolio',
        },
        { property: 'og:type', content: 'website' },
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
  modules: ['@nuxt/image', '@nuxt/ui', '@nuxtjs/sitemap'],
  site: {
    url: 'https://reireias.dev',
    name: 'reireias.dev',
  },
  sitemap: {
    zeroRuntime: true,
  },
  routeRules: {
    '/job': { sitemap: false },
    '/skill': { sitemap: false },
    '/template': { sitemap: false },
    '/sandbox/**': { sitemap: false },
  },
  colorMode: {
    preference: 'dark',
    fallback: 'dark',
  },
  compatibilityDate: '2024-04-03',
})
