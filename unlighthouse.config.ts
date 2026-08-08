import { defineUnlighthouseConfig } from 'unlighthouse/config'

export default defineUnlighthouseConfig({
  outputPath: '.unlighthouse',
  urls: [
    '/',
    '/articles/',
    '/experience/',
    '/job/',
    '/profile/',
    '/sandbox/',
    '/sandbox/anime/',
    '/skill/',
    '/skills/',
    '/template/',
  ],
  scanner: {
    device: 'mobile',
    samples: 1,
    throttle: true,
  },
  chrome: {
    useSystem: true,
    useDownloadFallback: false,
  },
  lighthouseOptions: {
    onlyCategories: ['performance', 'accessibility', 'best-practices', 'seo'],
  },
  ci: {
    budget: {
      performance: 55,
      accessibility: 100,
      'best-practices': 100,
      seo: 100,
    },
    reporter: 'json',
  },
})
