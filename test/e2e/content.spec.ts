import { test, expect } from '@playwright/test'

test('home shows its primary information without scrolling', async ({
  page,
}) => {
  await page.goto('/')

  await expect(page.locator('.hero__copy')).toHaveCSS('opacity', '1')
  await expect(page.locator('.hero__identity')).toHaveCSS('opacity', '1')
  await expect(page.locator('.hero__identity img')).toBeVisible()
  await expect(page.getByRole('heading', { name: 'reireias' })).toBeVisible()
  await expect(page.locator('#experience .timeline li')).toHaveCount(2)
})

test('experience shows work highlights and education', async ({ page }) => {
  await page.goto('/experience')

  await expect(page.locator('.work-experience')).toHaveCount(2)
  await expect(page.locator('.experience-highlight')).toHaveCount(6)
  await expect(page.locator('.timeline li')).toHaveCount(4)
})

test('profile keeps personal details and external profiles', async ({
  page,
}) => {
  await page.goto('/profile')

  await expect(page.locator('.key-value-row')).toHaveCount(10)
  await expect(page.locator('.social-card')).toHaveCount(6)
})
