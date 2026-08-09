export const siteUrl = 'https://reireias.dev'

export interface PageSeo {
  title: string
  description: string
  canonicalPath?: string
  robots?: 'index, follow' | 'noindex, follow'
}

const defaultSeo: PageSeo = {
  title: 'reireias | Principal Engineer / SRE & Security',
  description:
    'SREとセキュリティを専門とするプリンシパルエンジニア、reireiasのポートフォリオです。',
}

const pageSeo: Record<string, PageSeo> = {
  '/': defaultSeo,
  '/articles': {
    title: 'Articles & Talks | reireias',
    description: 'reireiasが執筆した記事、登壇資料、個人の制作物を紹介します。',
  },
  '/experience': {
    title: 'Experience | reireias',
    description:
      'アプリケーション開発からSRE・セキュリティまで、reireiasの職歴と代表実績を紹介します。',
  },
  '/job': {
    title: 'Experienceへの移行案内 | reireias',
    description: '職歴ページはExperienceへ移動しました。',
    canonicalPath: '/experience',
    robots: 'noindex, follow',
  },
  '/profile': {
    title: 'Profile | reireias',
    description:
      'プリンシパルエンジニアとしての現在の仕事と、reireiasの個人プロフィールを紹介します。',
  },
  '/skill': {
    title: 'Skillsへの移行案内 | reireias',
    description: 'スキルページはSkillsへ移動しました。',
    canonicalPath: '/skills',
    robots: 'noindex, follow',
  },
  '/skills': {
    title: 'Skills | reireias',
    description:
      'SRE、セキュリティ、AI、アーキテクチャを中心としたreireiasの専門領域と技術スタックを紹介します。',
  },
  '/sandbox': {
    title: 'Sandbox | reireias',
    description: 'UIやアニメーションの技術検証を掲載しています。',
    robots: 'noindex, follow',
  },
  '/sandbox/anime': {
    title: 'Anime Experiments | reireias',
    description: 'anime.jsを使ったアニメーションの技術検証ページです。',
    robots: 'noindex, follow',
  },
  '/template': {
    title: 'Template | reireias',
    description: 'UIコンポーネントのテンプレートページです。',
    robots: 'noindex, follow',
  },
}

const normalizePath = (path: string): string =>
  path === '/' ? path : path.replace(/\/+$/, '')

export const getPageSeo = (path: string): PageSeo =>
  pageSeo[normalizePath(path)] ?? {
    ...defaultSeo,
    robots: 'noindex, follow',
  }

export const getCanonicalUrl = (path: string): string => {
  const normalizedPath = normalizePath(path)
  const seo = getPageSeo(normalizedPath)
  return `${siteUrl}${seo.canonicalPath ?? normalizedPath}`
}
