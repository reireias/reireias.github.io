<template>
  <div>
    <PageTitle title="Articles" />
    <div class="article-grid">
      <a
        v-for="article in articles"
        :key="article.href"
        :href="article.href"
        target="_blank"
        rel="noopener noreferrer"
        class="article-link"
      >
        <UCard class="article-card">
          <img :src="article.image" :alt="article.title" />
          <div class="article-card__body">
            <h2>{{ article.title }}</h2>
            <p>{{ article.description }}</p>
          </div>
        </UCard>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
const articles = [
  {
    href: 'https://tech.medpeer.co.jp/entry/2026/06/26/122446',
    image:
      'https://ogimage.blog.st-hatena.com/8454420450089458396/14945776032045239896/1782444286',
    title: 'Claude Enterprise全社導入で何を検討し、何をやらなかったか',
    description:
      'メドピア開発者ブログに寄稿した、Claude Enterprise全社導入の検討記事です',
  },
  {
    href: 'https://aws.amazon.com/jp/builders-flash/202211/best-practice-game-day/',
    image:
      'https://d1.awsstatic.com/Developer%20Marketing/jp/magazine/2022/thumb_best-practice-game-day.e8c956b14c26eb1cb52e08a998ac38544517f23d.jpg',
    title: 'よりリアルな攻撃で⾏うゲームデーで得たベストプラクティスとは ?',
    description: 'AWSのメディアに寄稿させていただいた記事です',
  },
  {
    href: 'https://speakerdeck.com/reireias/improving-efficiency-of-aws-account-operations-by-medpeer-sre-team',
    image:
      'https://files.speakerdeck.com/presentations/bbcf01585b25479cb993975808c63709/slide_0.jpg?19573755',
    title: 'SREチームによるAWSアカウント運用効率化',
    description: 'AWSのイベントで登壇した資料です',
  },
  {
    href: 'https://tech.medpeer.co.jp/entry/2021/10/01/090000',
    image:
      'https://cdn-ak.f.st-hatena.com/images/fotolife/s/satoshitakumi/20210915/20210915154524.png',
    title:
      'AWS Config + Athena + QuickSightによる複数AWSアカウント横断でのセキュリティ状態の可視化',
    description: '多数のAWSアカウントのセキュリティを可視化する仕組みです',
  },
  {
    href: 'https://qiita.com/reireias/items/0d87de18f43f27a8ed9b',
    image: '/article01.jpg',
    title: 'ラズパイ4で作るディスプレイ付きKubernetesクラスター',
    description: 'こだわりが詰まった作品です',
  },
  {
    href: 'https://qiita.com/reireias/items/2e377b2a42e4cb3aded1',
    image: '/article02.png',
    title: 'Firebase + Nuxt.js + RaspberryPiで作る猫監視システム',
    description: 'Firebaseの様々な機能を試してるうちに思いついたシステムです',
  },
  {
    href: 'https://speakerdeck.com/reireias/medpeer-aws-seminar-ecs',
    image:
      'https://files.speakerdeck.com/presentations/f93589dc55794dc8b722be041a7997d1/slide_0.jpg?672505',
    title: 'AWS勉強会 ECS編',
    description: '社内で開催した勉強会の資料です',
  },
]
</script>

<style scoped lang="scss">
.article-grid {
  display: grid;
  gap: 24px;
  padding-bottom: 64px;
}
.article-card {
  height: 100%;
  overflow: hidden;
  color: var(--color-text);
  background: var(--color-surface);
  border: 1px solid var(--color-border);
}
.article-link {
  display: block;
  text-decoration: none;
}
.article-card img {
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
}
.article-card__body {
  padding: 20px;
}
h2 {
  margin: 0 0 8px;
  font-size: 1.2rem;
  line-height: 1.4;
}
p {
  margin: 0;
  color: var(--color-text-muted);
}

@media (width >= 640px) {
  .article-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
