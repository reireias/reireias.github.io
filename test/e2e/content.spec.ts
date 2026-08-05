import { test, expect } from '@playwright/test'

test('home shows its primary information without scrolling', async ({
  page,
}) => {
  await page.goto('/')

  await expect(page.locator('.hero__copy')).toHaveCSS('opacity', '1')
  await expect(page.getByRole('heading', { name: 'reireias' })).toBeVisible()
  await expect(page.locator('#experience .timeline li')).toHaveCount(2)
})

test('experience shows the complete timeline', async ({ page }) => {
  await page.goto('/experience')

  await expect(page.locator('.timeline li')).toHaveCount(6)
})

test('profile keeps personal details and external profiles', async ({
  page,
}) => {
  await page.goto('/profile')

  await expect(page.locator('.key-value-row')).toHaveCount(10)
  await expect(page.locator('.social-card')).toHaveCount(6)
})
