<template>
  <div>
    <PageTitle
      title="Profile"
      description="現在の仕事と個人プロフィールを掲載しています。"
    />

    <section class="profile-intro" aria-labelledby="profile-intro-heading">
      <img src="/icon.png" alt="reireiasのアイコン" />
      <div>
        <h2 id="profile-intro-heading">現在の仕事</h2>
        <p>
          ヘルステックベンチャーでプリンシパルエンジニアとして働いています。SREを主な専門領域として、複数サービスのアーキテクチャ設計、インフラ基盤の構築・運用、パフォーマンス改善、コスト最適化などを担当しています。
        </p>
        <p>
          セキュリティ領域では、全社横断のセキュリティ対策、KPI策定、社内教育、開発ルールの策定などを担当しています。最近はAIを活用した開発のガードレールや運用設計にも取り組んでいます。
        </p>
      </div>
    </section>

    <section class="profile-section" aria-labelledby="details-heading">
      <SectionHeading
        id="details-heading"
        index="01"
        label="Details"
        title="基本情報"
      />
      <dl class="profile-list">
        <KeyValueRow
          v-for="profile in profiles"
          :key="profile.key"
          :k="profile.key"
          :v="profile.value"
        />
      </dl>
    </section>

    <section class="profile-section" aria-labelledby="socials-heading">
      <SectionHeading
        id="socials-heading"
        index="02"
        label="Socials"
        title="外部プロフィール"
      />
      <div class="social-grid">
        <a
          v-for="account in socials"
          :key="account.name"
          :href="account.url"
          target="_blank"
          rel="noopener noreferrer"
          :aria-label="`${account.name}（新しいタブで開きます）`"
          class="social-card"
        >
          <span>
            <strong>{{ account.name }}</strong>
            <small>{{ account.value }}</small>
          </span>
          <span aria-hidden="true">↗</span>
        </a>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import profiles from '@/constants/profiles'
import socials from '@/constants/socials'
</script>

<style scoped>
.profile-intro {
  display: grid;
  gap: 32px;
  align-items: start;
  padding: 32px;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
}

.profile-intro img {
  width: 120px;
  aspect-ratio: 1;
  object-fit: cover;
  border-radius: var(--radius-full);
}

.profile-intro h2 {
  margin: 0 0 16px;
  font-size: 1.35rem;
}

.profile-intro p {
  max-width: 720px;
  margin: 0 0 16px;
  color: var(--color-text-muted);
}

.profile-section {
  padding-top: 96px;
}

.profile-list {
  margin: 0;
}

.social-grid {
  display: grid;
  gap: 16px;
}

.social-card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 72px;
  padding: 16px 20px;
  color: var(--color-text);
  text-decoration: none;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  transition:
    background-color var(--motion-fast) ease-out,
    border-color var(--motion-fast) ease-out;
}

.social-card:hover,
.social-card:focus-visible {
  background: var(--color-surface-hover);
  border-color: var(--color-border-strong);
}

.social-card strong,
.social-card small {
  display: block;
}

.social-card small {
  margin-top: 4px;
  color: var(--color-text-muted);
  font-family: var(--font-technical);
}

.social-card > span:last-child {
  color: var(--color-secondary);
}

@media (width >= 640px) {
  .profile-intro {
    grid-template-columns: 120px 1fr;
  }

  .social-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
