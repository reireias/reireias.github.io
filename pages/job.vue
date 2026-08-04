<template>
  <div>
    <PageTitle title="Experience" />
    <ol class="timeline">
      <li
        v-for="item in formattedTimeline"
        :key="item.title"
        :style="{ '--timeline-color': item.hexColor }"
      >
        <time>{{ item.year }}</time>
        <UCard class="timeline-card">
          <h2>{{ item.title }}</h2>
          <p>{{ item.text }}</p>
        </UCard>
      </li>
    </ol>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import timeline from '@/constants/timeline'
const colorMap: Record<string, string> = {
  secondary: '#66d9ef',
  accent: '#ae81ff',
  warning: '#fd971f',
}
const formattedTimeline = computed(() =>
  timeline.map((item) => ({
    ...item,
    hexColor: colorMap[item.color] || '#a6e22e',
  }))
)
</script>

<style scoped lang="scss">
.timeline {
  margin: 0;
  padding: 0 0 64px;
  list-style: none;
}
.timeline li {
  position: relative;
  display: grid;
  gap: 12px;
  padding: 0 0 32px 32px;
  border-left: 1px solid var(--color-border-strong);
}
.timeline li::before {
  position: absolute;
  top: 8px;
  left: -6px;
  width: 11px;
  height: 11px;
  content: '';
  background: var(--timeline-color);
  border-radius: 50%;
}
time {
  color: var(--color-text-muted);
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 0.875rem;
}
.timeline-card {
  color: var(--color-text);
  background: var(--color-surface);
  border: 1px solid var(--color-border);
}
h2 {
  margin: 0 0 8px;
  color: var(--timeline-color);
  font-size: 1.25rem;
}
p {
  margin: 0;
}

@media (width >= 640px) {
  .timeline li {
    grid-template-columns: 100px 1fr;
    padding-left: 40px;
  }
}
</style>
