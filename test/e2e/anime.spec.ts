import { test, expect } from '@playwright/test'

const animations = [
  { name: 'motion path', buttonIndex: 0, target: '#anime1 .el' },
  { name: 'multi motion path', buttonIndex: 1, target: '#anime2 .el1' },
  { name: 'delay motion path', buttonIndex: 2, target: '#anime3 .el1' },
  { name: 'spiral', buttonIndex: 3, target: '#anime4 .el' },
  { name: 'grid', buttonIndex: 4, target: '#grid1 .el:nth-child(41)' },
  { name: 'image', buttonIndex: 5, target: '#image1' },
  { name: 'footprints', buttonIndex: 6, target: '#footprints .pad' },
]

test.describe('Anime experiments', () => {
  for (const animation of animations) {
    test(`${animation.name} starts`, async ({ page }) => {
      await page.goto('/sandbox/anime', { waitUntil: 'networkidle' })

      const target = page.locator(animation.target).first()
      const initialStyle = await target.evaluate((element) => {
        const style = getComputedStyle(element)
        return `${style.transform}|${style.opacity}`
      })

      await page
        .getByRole('button', { name: 'start' })
        .nth(animation.buttonIndex)
        .click()

      if (animation.buttonIndex < 4) {
        await expect(target).toBeVisible()
      }

      await expect
        .poll(() =>
          target.evaluate((element) => {
            const style = getComputedStyle(element)
            return `${style.transform}|${style.opacity}`
          })
        )
        .not.toBe(initialStyle)
    })
  }
})
