<template>
  <div>
    <PageTitle title="Profile" />
    <div class="profile-avatar">
      <UAvatar src="/icon.png" alt="reireiasのアイコン" size="3xl" />
    </div>
    <UCard class="intro-card">
      <h2>自己紹介</h2>
      <div class="intro-copy">
        <p>
          ヘルステックベンチャーでプリンシパルエンジニアとして働くSRE /
          セキュリティエンジニアです。複数サービスのアーキテクチャ設計、インフラ基盤の構築・運用、ボトルネック改善やコスト最適化等のSRE業務を中心に、Ruby
          on Railsを用いたアプリケーション開発も担当したりします。
        </p>
        <p>
          セキュリティエンジニアとして、全社横断のセキュリティ対策やKPI策定、社内教育、開発ルールの策定なども担当しています。
        </p>
        <p>
          最近はAIの台頭で変化する開発の在り方に対して、SRE /
          セキュリティの知見を活かしたガードレールや仕組み・組織づくりに関心があります。
        </p>
        <p>
          常に新技術や新しいことにチャレンジできる環境に身を置くように心がけています。
        </p>
      </div>
    </UCard>
    <dl class="profile-list">
      <KeyValueRow
        v-for="profile in profiles"
        :key="profile.key"
        :k="profile.key"
        :v="profile.value"
      />
    </dl>
    <PageTitle title="Socials" />
    <div class="social-grid">
      <a
        v-for="account in socials"
        :key="account.name"
        :href="account.url"
        target="_blank"
        rel="noopener noreferrer"
        class="social-card"
        :class="`social-bg-${account.name.toLowerCase().replace(/\s+/g, '')}`"
        ><span aria-hidden="true">↗</span><span>{{ account.name }}</span></a
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import socials from '@/constants/socials'
import profiles from '@/constants/profiles'
</script>

<style scoped lang="scss">
.profile-avatar {
  display: flex;
  justify-content: center;
  margin-bottom: 32px;
}
.intro-card {
  color: var(--color-text);
  background: var(--color-surface);
  border: 1px solid var(--color-border);
}
h2 {
  margin: 0 0 16px;
  font-size: 1.35rem;
}
.intro-copy {
  max-width: 720px;
  color: var(--color-text-muted);
}
.intro-copy p {
  margin: 0 0 16px;
}
.profile-list {
  margin: 32px 0 0;
}
.social-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  padding-bottom: 64px;
}
.social-card {
  display: flex;
  gap: 10px;
  align-items: center;
  padding: 16px;
  color: #fff;
  font-weight: 600;
  text-decoration: none;
  border-radius: 8px;
}
.social-bg-github {
  background: #363636;
}
.social-bg-twitter {
  background: #1d8cd8;
}
.social-bg-qiita {
  background: #438f13;
}
.social-bg-speakerdeck {
  background: #007a71;
}
.social-bg-zenn {
  background: #247ab5;
}
.social-bg-lapras {
  background: #3348ca;
}

@media (width >= 640px) {
  .social-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
