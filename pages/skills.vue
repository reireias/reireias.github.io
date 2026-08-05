<template>
  <div>
    <PageTitle
      title="Skills"
      description="SRE、セキュリティ、クラウドインフラなどの経験を掲載しています。"
    />
    <section aria-labelledby="core-skills-heading">
      <SectionHeading
        id="core-skills-heading"
        index="01"
        label="Core"
        title="専門領域"
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

    <section class="detail-section" aria-labelledby="details-heading">
      <SectionHeading
        id="details-heading"
        index="02"
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
    title: 'Cloud Architecture',
    description: 'AWSやGCPを利用したクラウド基盤の設計・構築経験があります。',
    tags: ['AWS', 'GCP', 'Terraform', 'Serverless'],
  },
  {
    number: '02',
    title: 'Reliability Engineering',
    description: '可観測性、性能、コスト、CI/CDの構築・改善を担当しています。',
    tags: ['SRE', 'OpenTelemetry', 'CI/CD', 'FinOps'],
  },
  {
    number: '03',
    title: 'Security Engineering',
    description:
      'クラウドの技術対策、KPI、社内教育、開発ルールの策定を担当しています。',
    tags: ['Security', 'Governance', 'GameDay', 'AI Safety'],
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

.detail-section {
  padding-top: 96px;
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
    grid-template-columns: repeat(3, 1fr);
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
