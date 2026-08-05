import path from 'path'
import fs from 'fs'
import { test } from '@playwright/test'

const pages = [
  { name: 'home', path: '/' },
  { name: 'profile', path: '/profile' },
  { name: 'experience', path: '/experience' },
  { name: 'articles', path: '/articles' },
  { name: 'skills', path: '/skills' },
  { name: 'sandbox', path: '/sandbox' },
]

test.describe('Capture Page UI Screenshots', () => {
  test('takes desktop and mobile screenshots of all pages', async ({
    page,
  }) => {
    const outputDir = path.join(process.cwd(), 'screenshots')
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true })
    }

    for (const p of pages) {
      // Desktop capture
      await page.setViewportSize({ width: 1280, height: 800 })
      await page.goto(p.path)
      await page.waitForLoadState('networkidle')
      if (p.name === 'home') {
        await page.waitForTimeout(1000)
      }
      await page.screenshot({
        path: path.join(outputDir, `${p.name}-desktop.png`),
        fullPage: true,
      })

      // Mobile capture
      await page.setViewportSize({ width: 375, height: 667 })
      await page.goto(p.path)
      await page.waitForLoadState('networkidle')
      await page.screenshot({
        path: path.join(outputDir, `${p.name}-mobile.png`),
        fullPage: true,
      })
    }
  })
})
