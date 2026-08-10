<template>
  <button class="app-button" type="button"><slot /></button>
</template>

<style scoped>
.app-button {
  padding: 6px 12px;
  color: var(--color-secondary);
  font-weight: 500;
  border: 1px solid var(--color-secondary);
  border-radius: 6px;
  cursor: pointer;
  transition:
    color var(--motion-fast),
    background-color var(--motion-fast);
}

.app-button:hover {
  color: var(--color-background);
  background: var(--color-secondary);
}

@media (prefers-reduced-motion: reduce) {
  .app-button {
    transition: none;
  }
}
</style>
