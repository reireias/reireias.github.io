export type Article = {
  href: string
  image: string
  title: string
  description: string
  type: 'Article' | 'Talk' | 'Project'
  source: string
  year: number
  tags: string[]
  featured?: boolean
}

const articles: Article[] = [
  {
    href: 'https://tech.medpeer.co.jp/entry/2026/06/26/122446',
    image:
      'https://ogimage.blog.st-hatena.com/8454420450089458396/14945776032045239896/1782444286',
    title: 'Claude Enterprise全社導入で何を検討し、何をやらなかったか',
    description:
      '全社導入に向けたセキュリティ、ガバナンス、運用設計の検討をまとめました。',
    type: 'Article',
    source: 'MedPeer Developer Blog',
    year: 2026,
    tags: ['AI', 'Security'],
    featured: true,
  },
  {
    href: 'https://aws.amazon.com/jp/builders-flash/202211/best-practice-game-day/',
    image:
      'https://d1.awsstatic.com/Developer%20Marketing/jp/magazine/2022/thumb_best-practice-game-day.e8c956b14c26eb1cb52e08a998ac38544517f23d.jpg',
    title: 'よりリアルな攻撃で行うゲームデーで得たベストプラクティスとは？',
    description:
      '実践的な攻撃シナリオを使ったセキュリティゲームデーの設計と学びを紹介します。',
    type: 'Article',
    source: 'AWS Builders Flash',
    year: 2022,
    tags: ['AWS', 'Security'],
    featured: true,
  },
  {
    href: 'https://speakerdeck.com/reireias/improving-efficiency-of-aws-account-operations-by-medpeer-sre-team',
    image:
      'https://files.speakerdeck.com/presentations/bbcf01585b25479cb993975808c63709/slide_0.jpg?19573755',
    title: 'SREチームによるAWSアカウント運用効率化',
    description:
      '複数AWSアカウントの運用を、安全性を保ちながら効率化した取り組みです。',
    type: 'Talk',
    source: 'Speaker Deck',
    year: 2022,
    tags: ['AWS', 'SRE'],
    featured: true,
  },
  {
    href: 'https://tech.medpeer.co.jp/entry/2021/10/01/090000',
    image:
      'https://cdn-ak.f.st-hatena.com/images/fotolife/s/satoshitakumi/20210915/20210915154524.png',
    title:
      'AWS Config + Athena + QuickSightによる複数AWSアカウント横断でのセキュリティ状態の可視化',
    description:
      '多数のAWSアカウントを横断し、セキュリティ状態を継続的に把握する仕組みです。',
    type: 'Article',
    source: 'MedPeer Developer Blog',
    year: 2021,
    tags: ['AWS', 'Security'],
  },
  {
    href: 'https://qiita.com/reireias/items/0d87de18f43f27a8ed9b',
    image: '/article01.jpg',
    title: 'ラズパイ4で作るディスプレイ付きKubernetesクラスター',
    description:
      'Raspberry Piと小型ディスプレイで、状態を目で確認できるKubernetesクラスターを制作しました。',
    type: 'Project',
    source: 'Qiita',
    year: 2020,
    tags: ['Kubernetes', 'Raspberry Pi'],
  },
  {
    href: 'https://qiita.com/reireias/items/2e377b2a42e4cb3aded1',
    image: '/article02.png',
    title: 'Firebase + Nuxt.js + Raspberry Piで作る猫監視システム',
    description:
      'Firebaseの機能を組み合わせ、外出先から猫の様子を確認できるシステムを制作しました。',
    type: 'Project',
    source: 'Qiita',
    year: 2019,
    tags: ['Nuxt', 'Firebase'],
  },
  {
    href: 'https://speakerdeck.com/reireias/medpeer-aws-seminar-ecs',
    image:
      'https://files.speakerdeck.com/presentations/f93589dc55794dc8b722be041a7997d1/slide_0.jpg?672505',
    title: 'AWS勉強会 ECS編',
    description:
      'コンテナとECSの基礎から実運用までを解説した社内勉強会資料です。',
    type: 'Talk',
    source: 'Speaker Deck',
    year: 2019,
    tags: ['AWS', 'ECS'],
  },
]

export default articles
