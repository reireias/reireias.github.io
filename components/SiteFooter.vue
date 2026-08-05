<template>
  <footer id="contact" class="site-footer">
    <div class="site-footer__inner">
      <NuxtLink class="site-footer__brand" to="/">reireias.dev</NuxtLink>
      <nav aria-label="フッターナビゲーション">
        <a
          href="https://github.com/reireias"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub（新しいタブで開きます）"
          >GitHub <span aria-hidden="true">↗</span></a
        >
        <a
          href="https://x.com/reirei_As"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="X（新しいタブで開きます）"
          >X <span aria-hidden="true">↗</span></a
        >
        <a
          href="https://zenn.dev/reireias"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Zenn（新しいタブで開きます）"
          >Zenn <span aria-hidden="true">↗</span></a
        >
        <a
          href="https://speakerdeck.com/reireias"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Speaker Deck（新しいタブで開きます）"
          >Speaker Deck <span aria-hidden="true">↗</span></a
        >
        <NuxtLink to="/sandbox">Sandbox</NuxtLink>
      </nav>
      <p class="site-footer__copyright">© {{ currentYear }} reireias</p>
    </div>
  </footer>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>

<style scoped>
.site-footer {
  margin-top: 96px;
  border-top: 1px solid var(--color-border);
}

.site-footer__inner {
  display: grid;
  gap: 32px;
  width: min(100% - 32px, 1120px);
  margin-inline: auto;
  padding-block: 48px 32px;
}

.site-footer__brand {
  color: var(--color-primary);
  font-family: var(--font-technical);
  font-size: 1rem;
  font-weight: 700;
  text-decoration: none;
}

nav {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
}

nav a {
  min-height: 44px;
  color: var(--color-text-muted);
  font-family: var(--font-technical);
  font-size: 0.875rem;
  line-height: 44px;
  text-decoration: none;
}

nav a:hover {
  color: var(--color-text);
}

.site-footer__copyright {
  margin: 0;
  color: var(--color-text-muted);
  font-family: var(--font-technical);
  font-size: 0.75rem;
}

@media (width >= 768px) {
  .site-footer__inner {
    align-items: center;
    grid-template-columns: 1fr auto;
    width: min(100% - 64px, 1120px);
  }

  .site-footer__copyright {
    grid-column: 1 / -1;
  }
}
</style>
