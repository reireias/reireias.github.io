<template>
  <article class="work-experience">
    <header class="work-experience__header">
      <p class="work-experience__period">{{ experience.period }}</p>
      <div>
        <h3>{{ experience.organization }}</h3>
        <p class="work-experience__position">{{ experience.position }}</p>
      </div>
    </header>

    <p class="work-experience__summary">{{ experience.summary }}</p>

    <ul
      v-if="experience.scale"
      class="work-experience__scale"
      aria-label="担当規模"
    >
      <li v-for="item in experience.scale" :key="item">{{ item }}</li>
    </ul>

    <div class="work-experience__highlights">
      <section
        v-for="highlight in experience.highlights"
        :key="highlight.title"
        class="experience-highlight"
      >
        <h4>{{ highlight.title }}</h4>
        <p>{{ highlight.description }}</p>
        <ul class="experience-highlight__outcomes">
          <li v-for="outcome in highlight.outcomes" :key="outcome">
            {{ outcome }}
          </li>
        </ul>
        <ul
          class="experience-highlight__tags"
          :aria-label="`${highlight.title}の技術要素`"
        >
          <li v-for="tag in highlight.tags" :key="tag">{{ tag }}</li>
        </ul>
      </section>
    </div>
  </article>
</template>

<script setup lang="ts">
import type { WorkExperience } from '@/constants/experiences'

defineProps<{ experience: WorkExperience }>()
</script>

<style scoped>
.work-experience {
  padding-top: 40px;
  border-top: 1px solid var(--color-border-strong);
}

.work-experience__header {
  display: grid;
  gap: 12px;
}

.work-experience__period {
  margin: 4px 0 0;
  color: var(--color-secondary);
  font-family: var(--font-technical);
  font-size: 0.8rem;
}

h3 {
  margin: 0;
  font-size: clamp(1.5rem, 4vw, 2rem);
}

.work-experience__position {
  margin: 8px 0 0;
  color: var(--color-primary);
  font-weight: 600;
}

.work-experience__summary {
  max-width: 760px;
  margin: 24px 0 0;
  color: var(--color-text-muted);
  font-size: 1.05rem;
}

.work-experience__scale,
.experience-highlight__tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding: 0;
  list-style: none;
}

.work-experience__scale {
  margin: 24px 0 0;
}

.work-experience__scale li {
  padding: 8px 12px;
  color: var(--color-text);
  font-family: var(--font-technical);
  font-size: 0.75rem;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-full);
}

.work-experience__highlights {
  display: grid;
  gap: 16px;
  margin-top: 40px;
}

.experience-highlight {
  padding: 24px;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
}

.experience-highlight h4 {
  margin: 0;
  font-size: 1.15rem;
}

.experience-highlight > p {
  margin: 12px 0 0;
  color: var(--color-text-muted);
}

.experience-highlight__outcomes {
  margin: 20px 0 0;
  padding-left: 20px;
  color: var(--color-text-muted);
}

.experience-highlight__outcomes li + li {
  margin-top: 8px;
}

.experience-highlight__tags {
  margin: 20px 0 0;
}

.experience-highlight__tags li {
  padding: 3px 8px;
  color: var(--color-secondary);
  font-family: var(--font-technical);
  font-size: 0.7rem;
  background: rgb(102 217 239 / 0.08);
  border-radius: var(--radius-full);
}

@media (width >= 720px) {
  .work-experience__header {
    grid-template-columns: 140px 1fr;
  }

  .work-experience__summary,
  .work-experience__scale,
  .work-experience__highlights {
    margin-left: 140px;
  }

  .work-experience__highlights {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
</style>
