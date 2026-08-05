<template>
  <ol class="timeline">
    <li v-for="item in items" :key="`${item.year}-${item.title}`">
      <time>{{ item.year }}</time>
      <div>
        <h3>{{ item.title }}</h3>
        <p>{{ item.text }}</p>
      </div>
    </li>
  </ol>
</template>

<script setup lang="ts">
defineProps<{
  items: Array<{
    year: number
    title: string
    text: string
  }>
}>()
</script>

<style scoped>
.timeline {
  margin: 0;
  padding: 0;
  list-style: none;
}

.timeline li {
  position: relative;
  display: grid;
  gap: 12px;
  padding: 0 0 40px 28px;
  border-left: 1px solid var(--color-border-strong);
}

.timeline li::before {
  position: absolute;
  top: 8px;
  left: -6px;
  width: 11px;
  height: 11px;
  content: '';
  background: var(--color-primary);
  border-radius: var(--radius-full);
}

time {
  color: var(--color-secondary);
  font-family: var(--font-technical);
  font-size: 0.875rem;
}

h3 {
  margin: 0 0 8px;
  font-size: 1.25rem;
}

p {
  margin: 0;
  color: var(--color-text-muted);
}

@media (width >= 640px) {
  .timeline li {
    grid-template-columns: 100px 1fr;
    padding-left: 40px;
  }
}
</style>
