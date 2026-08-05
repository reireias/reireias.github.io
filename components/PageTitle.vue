<template>
  <header class="page-heading">
    <p class="page-heading__label">// {{ title.toLowerCase() }}</p>
    <h1>{{ title }}</h1>
    <p v-if="description" class="page-heading__description">
      {{ description }}
    </p>
  </header>
</template>

<script setup lang="ts">
defineProps<{ title: string; description?: string }>()
</script>

<style scoped>
.page-heading {
  max-width: 720px;
  padding: 72px 0 48px;
}

.page-heading__label {
  margin: 0 0 8px;
  color: var(--color-primary);
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.08em;
}

h1 {
  margin: 0;
  color: var(--color-text);
  font-size: clamp(2.5rem, 7vw, 3.5rem);
  font-weight: 700;
  line-height: 1.1;
}

.page-heading__description {
  margin: 20px 0 0;
  color: var(--color-text-muted);
  font-size: 1.05rem;
}
</style>
