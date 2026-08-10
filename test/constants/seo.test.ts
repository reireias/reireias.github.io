import { getCanonicalUrl, getPageSeo } from '@/constants/seo'

describe('page SEO metadata', () => {
  it('defines unique metadata for primary pages', () => {
    const paths = ['/', '/profile', '/skills', '/experience', '/articles']
    const metadata = paths.map(getPageSeo)

    expect(new Set(metadata.map(({ title }) => title)).size).toBe(paths.length)
    expect(new Set(metadata.map(({ description }) => description)).size).toBe(
      paths.length
    )
    expect(metadata.every(({ robots }) => robots === undefined)).toBe(true)
  })

  it('keeps migrated URLs out of the index and points to their replacements', () => {
    expect(getPageSeo('/job').robots).toBe('noindex, follow')
    expect(getCanonicalUrl('/job')).toBe('https://reireias.dev/experience')
    expect(getCanonicalUrl('/skill')).toBe('https://reireias.dev/skills')
  })

  it('prevents experimental and unknown pages from being indexed', () => {
    expect(getPageSeo('/sandbox/anime').robots).toBe('noindex, follow')
    expect(getPageSeo('/unknown').robots).toBe('noindex, follow')
  })

  it('normalizes trailing slashes to the canonical page URL', () => {
    expect(getPageSeo('/profile/')).toEqual(getPageSeo('/profile'))
    expect(getCanonicalUrl('/profile/')).toBe('https://reireias.dev/profile')
  })
})
