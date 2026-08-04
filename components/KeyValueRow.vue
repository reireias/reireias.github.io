<template>
  <div class="key-value-row">
    <dt>{{ k }}</dt>
    <dd>{{ v }}</dd>
  </div>
</template>

<script setup lang="ts">
defineProps<{ k: string; v: string }>()
</script>

<style scoped>
.key-value-row {
  display: grid;
  grid-template-columns: minmax(100px, 1fr) 2fr;
  gap: 16px;
  padding: 12px 0;
  border-bottom: 1px solid var(--color-border);
}

dt {
  color: var(--color-text-muted);
  font-family: 'JetBrains Mono', ui-monospace, monospace;
}

dd {
  margin: 0;
}
</style>
