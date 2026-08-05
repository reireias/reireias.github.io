<template>
  <div>
    <PageTitle
      title="Sandbox"
      description="UIやアニメーションの技術検証を掲載しています。"
    />
    <div class="sandbox-grid">
      <NuxtLink to="/sandbox/anime" class="sandbox-card">
        <div class="sandbox-card__preview" aria-hidden="true">
          <span></span><span></span><span></span><span></span><span></span>
        </div>
        <div class="sandbox-card__body">
          <p>Animation · anime.js</p>
          <h2>Anime experiments</h2>
          <span>実験を見る →</span>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped>
.sandbox-grid {
  display: grid;
  max-width: 560px;
}

.sandbox-card {
  overflow: hidden;
  color: var(--color-text);
  text-decoration: none;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  transition:
    border-color var(--motion-fast) ease-out,
    transform var(--motion-normal) ease-out;
}

.sandbox-card:hover,
.sandbox-card:focus-visible {
  border-color: var(--color-border-strong);
  transform: translateY(-2px);
}

.sandbox-card__preview {
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: center;
  min-height: 220px;
  background:
    linear-gradient(90deg, rgb(50 58 49 / 0.35) 1px, transparent 1px),
    linear-gradient(rgb(50 58 49 / 0.35) 1px, transparent 1px);
  background-size: 32px 32px;
}

.sandbox-card__preview span {
  width: 20px;
  height: 20px;
  background: var(--color-primary);
}

.sandbox-card__preview span:nth-child(2),
.sandbox-card__preview span:nth-child(4) {
  background: var(--color-secondary);
  transform: translateY(-16px);
}

.sandbox-card__body {
  padding: 24px;
}

.sandbox-card__body p {
  margin: 0 0 8px;
  color: var(--color-secondary);
  font-family: var(--font-technical);
  font-size: 0.75rem;
}

.sandbox-card__body h2 {
  margin: 0 0 20px;
  font-size: 1.25rem;
}

.sandbox-card__body span {
  color: var(--color-primary);
  font-family: var(--font-technical);
  font-size: 0.875rem;
}

@media (prefers-reduced-motion: reduce) {
  .sandbox-card {
    transition: none;
  }

  .sandbox-card:hover,
  .sandbox-card:focus-visible {
    transform: none;
  }
}
</style>
