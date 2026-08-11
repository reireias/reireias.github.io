import { defineUnlighthouseConfig } from 'unlighthouse/config'

export default defineUnlighthouseConfig({
  outputPath: '.unlighthouse',
  urls: [
    '/',
    '/articles/',
    '/experience/',
    '/job/',
    '/profile/',
    '/skill/',
    '/skills/',
    '/template/',
  ],
  scanner: {
    device: 'mobile',
    // Unlighthouse selects Lighthouse's median run when multiple samples exist.
    samples: 3,
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
      performance: 60,
      accessibility: 100,
      'best-practices': 100,
    },
    reporter: 'json',
  },
})
