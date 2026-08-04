import { test, expect } from '@playwright/test'

test.describe('E2E Client Error Check', () => {
  const pages = [
    '/',
    '/profile',
    '/skill',
    '/job',
    '/articles',
    '/sandbox',
    '/sandbox/anime',
  ]

  for (const pagePath of pages) {
    test(`page ${pagePath} should load without console errors or 404 responses`, async ({
      page,
    }) => {
      const consoleErrors: string[] = []
      const failedRequests: string[] = []

      // Track console errors
      page.on('console', (msg) => {
        if (msg.type() === 'error') {
          consoleErrors.push(msg.text())
        }
      })

      // Track uncaught page exceptions
      page.on('pageerror', (exception) => {
        consoleErrors.push(exception.message)
      })

      // Track 404 / 500 failed network responses
      page.on('response', (response) => {
        if (response.status() >= 400) {
          failedRequests.push(`${response.status()} ${response.url()}`)
        }
      })

      const response = await page.goto(pagePath)
      expect(response?.status()).toBeLessThan(400)

      // Ensure page rendered body
      await expect(page.locator('body')).toBeVisible()

      // Assert no console errors or failed network requests
      expect(consoleErrors).toEqual([])
      expect(failedRequests).toEqual([])
    })
  }
})
