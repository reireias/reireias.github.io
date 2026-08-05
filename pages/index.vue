<template>
  <div>
    <section class="hero" aria-labelledby="hero-title">
      <div class="hero__sticky">
        <div class="hero__content">
          <div class="hero__identity" aria-hidden="true">
            <img src="/icon.png" alt="" />
          </div>
          <div class="hero__copy">
            <p class="hero__eyebrow">
              <span aria-hidden="true">&gt;</span> reireias.dev
            </p>
            <h1 id="hero-title">reireias</h1>
            <p class="hero__lead">
              SREを専門とするプリンシパルエンジニアです。セキュリティ領域にも取り組んでいます。
            </p>
            <a class="hero__cta" href="#about">プロフィール</a>
          </div>
        </div>
        <p class="hero__scroll" aria-hidden="true">SCROLL ↓</p>
      </div>
    </section>

    <div class="home-container">
      <section id="about" class="home-section" aria-labelledby="about-heading">
        <SectionHeading
          id="about-heading"
          index="01"
          label="About"
          title="SRE・セキュリティを軸に、AI時代の開発基盤をつくるプリンシパルエンジニア"
        />
        <div class="about-grid">
          <div class="about-copy">
            <p>
              ヘルステック領域のプリンシパルエンジニアとして、SREとセキュリティを軸に、20前後のサービスと40を超えるAWSアカウントを支える基盤づくりをリードしています。アーキテクチャ設計、Infrastructure
              as
              Code、可観測性、コスト最適化、全社セキュリティを横断して担当しています。
            </p>
            <p>
              アプリケーション開発の経験を活かし、インフラからアプリケーション、組織運営までを俯瞰した課題解決を得意としています。個別の問題を解くだけでなく、コード化・標準化・自動化によって、複数のプロジェクトへ展開できる仕組みとして残すことを重視しています。
            </p>
            <p>
              最近は、AIエージェントを安全かつ効果的に活用するための開発基盤、ガードレール、可観測性、サプライチェーンセキュリティの整備に取り組んでいます。
            </p>
          </div>
          <dl class="about-facts">
            <div>
              <dt>ROLE</dt>
              <dd>Principal Engineer</dd>
            </div>
            <div>
              <dt>FOCUS</dt>
              <dd>SRE / Security / AI Enablement</dd>
            </div>
            <div>
              <dt>SCALE</dt>
              <dd>~20 Services / 40+ AWS Accounts</dd>
            </div>
          </dl>
        </div>
        <NuxtLink class="text-link" to="/profile"
          >プロフィール詳細を見る →</NuxtLink
        >
      </section>

      <section
        id="expertise"
        class="home-section"
        aria-labelledby="expertise-heading"
      >
        <SectionHeading
          id="expertise-heading"
          index="02"
          label="Expertise"
          title="専門領域"
        />
        <div class="expertise-grid">
          <article
            v-for="item in expertise"
            :key="item.title"
            class="expertise-card"
          >
            <span class="expertise-card__icon" aria-hidden="true">
              <svg
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <template v-if="item.icon === 'platform'">
                  <rect x="5" y="7" width="30" height="9" rx="2" />
                  <rect x="5" y="24" width="30" height="9" rx="2" />
                  <path d="M10 11.5h.01M10 28.5h.01M16 11.5h14M16 28.5h14" />
                  <path d="M20 16v8" />
                </template>
                <template v-else-if="item.icon === 'security'">
                  <path
                    d="M20 4 33 9v9c0 8.5-5.2 14.4-13 18-7.8-3.6-13-9.5-13-18V9l13-5Z"
                  />
                  <path d="m14 20 4 4 8-9" />
                </template>
                <template v-else-if="item.icon === 'ai'">
                  <circle cx="20" cy="20" r="5" />
                  <circle cx="7" cy="9" r="3" />
                  <circle cx="33" cy="9" r="3" />
                  <circle cx="7" cy="31" r="3" />
                  <circle cx="33" cy="31" r="3" />
                  <path
                    d="m10 11.5 6 5M30 11.5l-6 5M10 28.5l6-5M30 28.5l-6-5"
                  />
                </template>
                <template v-else>
                  <rect x="4" y="5" width="13" height="10" rx="2" />
                  <rect x="23" y="5" width="13" height="10" rx="2" />
                  <rect x="13.5" y="25" width="13" height="10" rx="2" />
                  <path d="M10.5 15v5h19v-5M20 20v5" />
                </template>
              </svg>
            </span>
            <h3>{{ item.title }}</h3>
            <p>{{ item.description }}</p>
            <ul class="tag-list" :aria-label="`${item.title}の技術要素`">
              <li v-for="tag in item.tags" :key="tag">{{ tag }}</li>
            </ul>
          </article>
        </div>
        <NuxtLink class="text-link" to="/skills"
          >スキルと経験を詳しく見る →</NuxtLink
        >
      </section>

      <section
        id="experience"
        class="home-section"
        aria-labelledby="experience-heading"
      >
        <SectionHeading
          id="experience-heading"
          index="03"
          label="Experience"
          title="経歴"
        />
        <ExperienceTimeline :items="workTimeline" />
        <NuxtLink class="text-link" to="/experience"
          >すべての経歴を見る →</NuxtLink
        >
      </section>

      <section id="work" class="home-section" aria-labelledby="work-heading">
        <SectionHeading
          id="work-heading"
          index="04"
          label="Selected work"
          title="記事・登壇・制作物"
        />
        <div class="work-grid">
          <ArticleCard
            v-for="article in featuredArticles"
            :key="article.href"
            :article="article"
          />
        </div>
        <NuxtLink class="text-link" to="/articles"
          >すべての記事・登壇を見る →</NuxtLink
        >
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import articles from '@/constants/articles'
import timeline from '@/constants/timeline'

if (typeof definePageMeta !== 'undefined') {
  definePageMeta({ layout: 'gridless' })
}

const featuredArticles = articles.filter((article) => article.featured)
const workTimeline = computed(() =>
  timeline.filter((item) => item.color === 'warning')
)

const expertise = [
  {
    icon: 'platform',
    title: 'Platform SRE',
    description:
      '20前後のサービスを支えるクラウド基盤を設計・運用し、可用性、性能、開発体験を継続的に改善しています。',
    tags: ['AWS', 'Terraform', 'Observability', 'CI/CD'],
  },
  {
    icon: 'security',
    title: 'Security Engineering',
    description:
      '40を超えるAWSアカウントの統制、セキュリティKPI、インシデント対応、サプライチェーン攻撃対策を推進しています。',
    tags: ['Cloud Security', 'Governance', 'Supply Chain', 'GameDay'],
  },
  {
    icon: 'ai',
    title: 'AI Engineering',
    description:
      'AIエージェントを組織で安全に活用するための基盤、ガードレール、MCP統合、可観測性を設計・実装しています。',
    tags: ['AI Agents', 'MCP', 'Guardrails', 'Observability'],
  },
  {
    icon: 'architecture',
    title: 'Architecture & Enablement',
    description:
      'アプリケーションからインフラまでを俯瞰し、コード化・標準化・自動化によって複数プロジェクトへ展開できる仕組みを構築しています。',
    tags: ['Architecture', 'Standardization', 'Automation', 'DevEx'],
  },
]
</script>

<style scoped lang="scss">
.hero {
  position: relative;
  background:
    linear-gradient(rgb(19 22 19 / 0.84), rgb(19 22 19 / 0.96)),
    linear-gradient(90deg, var(--color-border) 1px, transparent 1px),
    linear-gradient(var(--color-border) 1px, transparent 1px);
  background-size:
    auto,
    40px 40px,
    40px 40px;
}

.hero__sticky {
  display: grid;
  min-height: calc(100svh - 64px);
  overflow: hidden;
  place-items: center;
}

.hero__content {
  position: relative;
  z-index: 1;
  display: grid;
  gap: 32px;
  align-items: center;
  width: min(100% - 32px, 1120px);
}

.hero__identity {
  width: clamp(96px, 24vw, 160px);
  aspect-ratio: 1;
  overflow: hidden;
  border: 2px solid var(--color-primary);
  border-radius: var(--radius-full);
}

.hero__identity img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hero__copy {
  opacity: 1;
}

.hero__eyebrow {
  margin: 0 0 16px;
  color: var(--color-secondary);
  font-family: var(--font-technical);
  font-size: 0.8rem;
  letter-spacing: 0.08em;
}

h1 {
  margin: 0;
  font-size: clamp(3rem, 14vw, 6.75rem);
  font-weight: 700;
  line-height: 0.95;
  letter-spacing: -0.055em;
}

.hero__lead {
  max-width: 620px;
  margin: 24px 0 28px;
  color: var(--color-text-muted);
  font-size: clamp(1rem, 2vw, 1.125rem);
}

.hero__cta {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 44px;
  padding: 10px 20px;
  color: var(--color-background);
  font-weight: 700;
  text-decoration: none;
  background: var(--color-primary);
  border-radius: var(--radius-md);
}

.hero__scroll {
  position: absolute;
  right: 16px;
  bottom: 20px;
  margin: 0;
  color: var(--color-text-muted);
  font-family: var(--font-technical);
  font-size: 0.7rem;
}

.home-container {
  width: min(100% - 32px, 1120px);
  margin-inline: auto;
}

.home-section {
  padding-top: 72px;
  scroll-margin-top: 64px;
}

.about-grid {
  display: grid;
  gap: 32px;
}

.about-copy {
  max-width: 720px;
  color: var(--color-text-muted);
  font-size: 1.05rem;
}

.about-copy p {
  margin: 0 0 20px;
}

.about-facts {
  margin: 0;
  border-top: 1px solid var(--color-border);
}

.about-facts div {
  display: grid;
  grid-template-columns: 88px 1fr;
  gap: 16px;
  padding: 12px 0;
  border-bottom: 1px solid var(--color-border);
}

.about-facts dt,
.about-facts dd {
  margin: 0;
}

.about-facts dt {
  color: var(--color-secondary);
  font-family: var(--font-technical);
  font-size: 0.75rem;
}

.expertise-grid,
.work-grid {
  display: grid;
  gap: 16px;
}

.expertise-card {
  padding: 24px;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-left: 2px solid var(--color-secondary);
  border-radius: var(--radius-md);
  transition:
    background-color var(--motion-fast) ease-out,
    transform var(--motion-normal) ease-out;
}

.expertise-card:hover {
  background: var(--color-surface-hover);
  transform: translateY(-2px);
}

.expertise-card__icon {
  display: block;
  width: 40px;
  height: 40px;
  color: var(--color-secondary);
}

.expertise-card__icon svg {
  width: 100%;
  height: 100%;
  stroke: currentcolor;
  stroke-width: 1.5;
  stroke-linecap: round;
  stroke-linejoin: round;
  vector-effect: non-scaling-stroke;
}

.expertise-card h3 {
  margin: 12px 0 8px;
  font-size: 1.3rem;
}

.expertise-card p {
  margin: 0;
  color: var(--color-text-muted);
}

.tag-list {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 20px 0 0;
  padding: 0;
  list-style: none;
}

.tag-list li {
  padding: 3px 8px;
  color: var(--color-secondary);
  font-family: var(--font-technical);
  font-size: 0.7rem;
  background: rgb(102 217 239 / 0.08);
  border-radius: var(--radius-full);
}

.text-link {
  display: inline-flex;
  min-height: 44px;
  align-items: center;
  margin-top: 24px;
  color: var(--color-primary);
  font-family: var(--font-technical);
  font-weight: 600;
  text-decoration: none;
}

@media (width >= 640px) {
  .hero__content {
    grid-template-columns: auto 1fr;
    gap: 56px;
  }

  .home-container {
    width: min(100% - 48px, 1120px);
  }

  .home-section {
    padding-top: 96px;
  }

  .about-grid {
    grid-template-columns: minmax(0, 2fr) minmax(240px, 1fr);
    gap: 64px;
  }

  .expertise-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .work-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (width >= 768px) {
  .hero__sticky {
    min-height: calc(100svh - 72px);
  }
}

@media (prefers-reduced-motion: reduce) {
  .hero__copy,
  .hero__scroll,
  .expertise-card {
    transition: none;
    transform: none;
  }
}
</style>
