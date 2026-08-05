<template>
  <header class="section-heading">
    <p class="section-heading__label">{{ index }} / {{ label }}</p>
    <h2>{{ title }}</h2>
    <p v-if="description" class="section-heading__description">
      {{ description }}
    </p>
  </header>
</template>

<script setup lang="ts">
defineProps<{
  index: string
  label: string
  title: string
  description?: string
}>()
</script>

<style scoped>
.section-heading {
  max-width: 720px;
  margin-bottom: 32px;
}

.section-heading__label {
  margin: 0 0 8px;
  color: var(--color-primary);
  font-family: var(--font-technical);
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

h2 {
  margin: 0;
  font-size: clamp(1.75rem, 5vw, 2.25rem);
  line-height: 1.2;
}

.section-heading__description {
  margin: 16px 0 0;
  color: var(--color-text-muted);
  font-size: 1.05rem;
}
</style>
