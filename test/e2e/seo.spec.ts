import { test, expect } from '@playwright/test'

test('primary pages expose unique metadata and canonical URLs', async ({
  page,
}) => {
  await page.goto('/profile')

  await expect(page).toHaveTitle('Profile | reireias')
  await expect(page.locator('meta[name="description"]')).toHaveAttribute(
    'content',
    'プリンシパルエンジニアとしての現在の仕事と、reireiasの個人プロフィールを紹介します。'
  )
  await expect(page.locator('meta[name="robots"]')).toHaveAttribute(
    'content',
    'index, follow'
  )
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
    'href',
    'https://reireias.dev/profile'
  )
})

test('migration and sandbox pages stay out of the index', async ({ page }) => {
  await page.goto('/job')

  await expect(page.locator('meta[name="robots"]')).toHaveAttribute(
    'content',
    'noindex, follow'
  )
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
    'href',
    'https://reireias.dev/experience'
  )

  await page.goto('/sandbox/anime')
  await expect(page.locator('meta[name="robots"]')).toHaveAttribute(
    'content',
    'noindex, follow'
  )
})

test('sitemap contains only primary public pages', async ({ request }) => {
  const response = await request.get('/sitemap.xml')
  const sitemap = await response.text()

  expect(response.ok()).toBe(true)
  for (const path of ['/', '/articles', '/experience', '/profile', '/skills']) {
    expect(sitemap).toContain(`<loc>https://reireias.dev${path}</loc>`)
  }
  for (const path of ['/job', '/skill', '/template', '/sandbox']) {
    expect(sitemap).not.toContain(`<loc>https://reireias.dev${path}</loc>`)
  }
})
