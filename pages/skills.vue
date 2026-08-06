<template>
  <div>
    <PageTitle
      title="Skills"
      description="SRE、セキュリティ、AI、アーキテクチャの課題を見つけ、解決を仕組みとして組織へ展開するスキルを紹介します。"
    />
    <section aria-labelledby="core-skills-heading">
      <SectionHeading
        id="core-skills-heading"
        index="01"
        label="Core"
        title="専門領域"
        description="顕在化した課題への対応だけでなく、サービスや組織を横断して潜在的な課題を発見し、優先順位をつけて改善へつなげます。"
      />
      <div class="core-grid">
        <article
          v-for="group in coreSkills"
          :key="group.title"
          class="core-card"
        >
          <p class="core-card__number">{{ group.number }}</p>
          <h3>{{ group.title }}</h3>
          <p>{{ group.description }}</p>
          <ul>
            <li v-for="tag in group.tags" :key="tag">{{ tag }}</li>
          </ul>
        </article>
      </div>
    </section>

    <section class="skill-section" aria-labelledby="tech-stack-heading">
      <SectionHeading
        id="tech-stack-heading"
        index="02"
        label="Technology"
        title="技術スタック"
        description="現在の専門領域に関わる主な技術を整理しています。"
      />
      <div class="technology-grid">
        <article
          v-for="group in technologyGroups"
          :key="group.title"
          class="technology-group"
        >
          <h3>{{ group.title }}</h3>
          <ul>
            <li v-for="technology in group.items" :key="technology">
              {{ technology }}
            </li>
          </ul>
        </article>
      </div>
    </section>

    <section class="skill-section" aria-labelledby="details-heading">
      <SectionHeading
        id="details-heading"
        index="03"
        label="Details"
        title="経験と実績"
      />
      <div class="skill-list">
        <details
          v-for="(skill, index) in skills"
          :key="skill.header"
          class="skill-detail"
          :open="index === 0"
        >
          <summary>
            <span class="skill-detail__index">{{
              String(index + 1).padStart(2, '0')
            }}</span>
            <span>{{ skill.header }}</span>
          </summary>
          <div class="skill-detail__content">
            <template
              v-for="(line, lineIndex) in skill.content"
              :key="lineIndex"
            >
              <p v-if="typeof line === 'string'">{{ line }}</p>
              <ul v-else>
                <li v-for="item in line" :key="item">{{ item }}</li>
              </ul>
            </template>
          </div>
        </details>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import skills from '@/constants/skills'

const coreSkills = [
  {
    number: '01',
    title: 'Platform SRE',
    description:
      '20前後のサービスを支えるクラウド基盤を設計・運用し、可用性、性能、開発体験を継続的に改善しています。',
    tags: ['AWS', 'Terraform', 'Observability', 'CI/CD'],
  },
  {
    number: '02',
    title: 'Security Engineering',
    description:
      '40を超えるAWSアカウントの統制、セキュリティKPI、インシデント対応、サプライチェーン攻撃対策を推進しています。',
    tags: ['Cloud Security', 'Governance', 'Supply Chain', 'GameDay'],
  },
  {
    number: '03',
    title: 'AI Engineering',
    description:
      'AIエージェントを組織で安全に活用する基盤を整え、リポジトリ横断の調査・実装を効率化し、Skillとして標準化しています。',
    tags: ['AI Agents', 'MCP', 'Skills', 'Guardrails'],
  },
  {
    number: '04',
    title: 'Architecture & Enablement',
    description:
      '技術課題を自ら発見し、関係者と調整しながら、コード化・標準化・自動化した改善を多数のリポジトリへ展開しています。',
    tags: ['Architecture', 'Standardization', 'Automation', 'DevEx'],
  },
]

const technologyGroups = [
  {
    title: 'Cloud & Platform',
    items: [
      'AWS',
      'GCP',
      'Terraform',
      'Kubernetes',
      'Docker',
      'Linux',
      'Amazon ECS / Lambda',
      'AWS Organizations',
      'GitHub Actions',
      'CircleCI',
    ],
  },
  {
    title: 'Application Development',
    items: [
      'TypeScript / JavaScript',
      'Ruby / Ruby on Rails',
      'Java',
      'Go',
      'Vue.js',
      'SQL',
    ],
  },
  {
    title: 'Observability & Security',
    items: [
      'OpenTelemetry',
      'Prometheus / Grafana',
      'Datadog',
      'CloudTrail / Security Hub',
      'Renovate',
      'gitleaks / zizmor',
    ],
  },
  {
    title: 'AI & Developer Experience',
    items: ['Claude Code', 'MCP', 'AI Agents', 'Agent Skills / Plugins'],
  },
]
</script>

<style scoped>
.core-grid {
  display: grid;
  gap: 16px;
}

.core-card {
  padding: 24px;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
}

.core-card__number {
  margin: 0 0 24px;
  color: var(--color-secondary);
  font-family: var(--font-technical);
  font-size: 0.75rem;
}

.core-card h3 {
  margin: 0 0 12px;
  font-size: 1.25rem;
}

.core-card > p:not(.core-card__number) {
  margin: 0;
  color: var(--color-text-muted);
}

.core-card ul {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 20px 0 0;
  padding: 0;
  list-style: none;
}

.core-card li {
  padding: 3px 8px;
  color: var(--color-secondary);
  font-family: var(--font-technical);
  font-size: 0.7rem;
  background: rgb(102 217 239 / 0.08);
  border-radius: var(--radius-full);
}

.skill-section {
  padding-top: 96px;
}

.technology-grid {
  display: grid;
  gap: 16px;
}

.technology-group {
  padding: 24px;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
}

.technology-group h3 {
  margin: 0 0 16px;
  font-size: 1rem;
}

.technology-group ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

.technology-group li {
  padding: 10px 0;
  font-weight: 600;
  border-top: 1px solid var(--color-border);
}

.skill-list {
  border-top: 1px solid var(--color-border);
}

.skill-detail {
  border-bottom: 1px solid var(--color-border);
}

summary {
  display: grid;
  grid-template-columns: 36px 1fr auto;
  gap: 12px;
  align-items: center;
  min-height: 64px;
  padding: 12px 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  list-style: none;
}

summary::-webkit-details-marker {
  display: none;
}

summary::after {
  color: var(--color-primary);
  font-family: var(--font-technical);
  content: '+';
}

details[open] summary::after {
  content: '−';
}

summary:hover {
  background: var(--color-surface-hover);
}

.skill-detail__index {
  color: var(--color-secondary);
  font-family: var(--font-technical);
  font-size: 0.75rem;
}

.skill-detail__content {
  max-width: 720px;
  padding: 0 8px 24px 56px;
  color: var(--color-text-muted);
}

.skill-detail__content p,
.skill-detail__content ul {
  margin: 12px 0;
}

@media (width >= 640px) {
  .core-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .technology-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  summary {
    padding-inline: 16px;
    font-size: 1.1rem;
  }

  .skill-detail__content {
    padding-left: 64px;
  }
}
</style>
