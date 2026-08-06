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

test('home connects topology nodes in both scroll directions while keeping the hero content fixed', async ({
  page,
}) => {
  await page.setViewportSize({ width: 1280, height: 800 })
  await page.goto('/')
  await page.evaluate(() => {
    document.documentElement.style.scrollBehavior = 'auto'
  })

  const hero = page.locator('.hero')
  const content = page.locator('.hero__content')
  const topologyPath = page.locator('.hero__topology-links path').first()
  const initialContentBox = await content.boundingBox()
  const initialPathOpacity = Number(
    await topologyPath.evaluate((element) => getComputedStyle(element).opacity)
  )

  await expect(hero).toHaveCSS('height', '1440px')
  await expect(topologyPath).toHaveCSS('stroke-dashoffset', '1px')

  await page.evaluate(() => window.scrollTo(0, 400))
  await page.waitForTimeout(100)

  const activeContentBox = await content.boundingBox()
  const activePathOpacity = Number(
    await topologyPath.evaluate((element) => getComputedStyle(element).opacity)
  )

  expect(
    Math.abs((activeContentBox?.y ?? 0) - (initialContentBox?.y ?? 0))
  ).toBeLessThanOrEqual(2)
  expect(activePathOpacity).toBeGreaterThan(initialPathOpacity + 0.2)
  await expect(page.locator('.hero__identity img')).toBeVisible()
  await expect(page.getByRole('heading', { name: 'reireias' })).toBeVisible()

  await page.evaluate(() => window.scrollTo(0, 700))

  await expect.poll(() => page.evaluate(() => window.scrollY)).toBe(700)
  await expect(topologyPath).toHaveCSS('stroke-dashoffset', '0px')
  await expect
    .poll(async () =>
      Number(
        await topologyPath.evaluate(
          (element) => getComputedStyle(element).opacity
        )
      )
    )
    .toBeCloseTo(0.2, 2)

  await page.evaluate(() => window.scrollTo(0, 0))

  await expect.poll(() => page.evaluate(() => window.scrollY)).toBe(0)
  await expect(topologyPath).toHaveCSS('stroke-dashoffset', '1px')
  const returnedContentBox = await content.boundingBox()
  await expect
    .poll(async () =>
      Number(
        await topologyPath.evaluate(
          (element) => getComputedStyle(element).opacity
        )
      )
    )
    .toBeCloseTo(initialPathOpacity, 2)
  expect(
    Math.abs((returnedContentBox?.y ?? 0) - (initialContentBox?.y ?? 0))
  ).toBeLessThanOrEqual(2)
})

test('home keeps the mobile hero sequence compact', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 })
  await page.goto('/')

  const heroHeight = await page
    .locator('.hero')
    .evaluate((element) => element.getBoundingClientRect().height)

  expect(heroHeight).toBeCloseTo(844 * 1.35, 0)
  expect(heroHeight).toBeLessThan(844 * 1.5)

  await page.evaluate(() => window.scrollTo(0, 295))
  await page.waitForTimeout(300)

  const viewportMetrics = await page.evaluate(() => ({
    innerWidth: window.innerWidth,
    scrollWidth: document.documentElement.scrollWidth,
    scrollX: window.scrollX,
  }))
  const contentBox = await page.locator('.hero__content').boundingBox()

  expect(viewportMetrics.scrollWidth).toBe(viewportMetrics.innerWidth)
  expect(viewportMetrics.scrollX).toBe(0)
  expect(contentBox?.x).toBeGreaterThanOrEqual(16)
})

test('home shows the settled topology without a sticky sequence for reduced motion', async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: 'reduce' })
  await page.setViewportSize({ width: 1280, height: 800 })
  await page.goto('/')

  await expect(page.locator('.hero__sticky')).toHaveCSS('position', 'relative')
  await expect(page.locator('.hero__topology-links path').first()).toHaveCSS(
    'animation-name',
    'none'
  )
  await expect(page.locator('.hero__identity img')).toBeVisible()
  await expect(page.getByRole('heading', { name: 'reireias' })).toBeVisible()
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
