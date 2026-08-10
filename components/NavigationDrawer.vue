<template>
  <header class="site-header">
    <div class="site-header__inner">
      <NuxtLink class="brand-logo" to="/">reireias.dev</NuxtLink>

      <nav class="desktop-nav" aria-label="メインナビゲーション">
        <NuxtLink
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          :active-class="link.to.includes('#') ? '' : undefined"
        >
          {{ link.name }}
        </NuxtLink>
      </nav>

      <button
        class="menu-button"
        type="button"
        :aria-expanded="menuOpen"
        aria-controls="mobile-navigation"
        :aria-label="menuOpen ? 'メニューを閉じる' : 'メニューを開く'"
        @click="menuOpen = !menuOpen"
      >
        <span aria-hidden="true">{{ menuOpen ? '×' : '☰' }}</span>
      </button>
    </div>

    <nav
      v-if="menuOpen"
      id="mobile-navigation"
      class="mobile-nav"
      aria-label="モバイルナビゲーション"
    >
      <NuxtLink
        v-for="link in links"
        :key="link.to"
        :to="link.to"
        :active-class="link.to.includes('#') ? '' : undefined"
        @click="menuOpen = false"
      >
        {{ link.name }}
      </NuxtLink>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const menuOpen = ref(false)
const links = [
  { name: 'About', to: '/#about' },
  { name: 'Experience', to: '/experience' },
  { name: 'Skills', to: '/skills' },
  { name: 'Articles', to: '/articles' },
]
</script>

<style scoped lang="scss">
.site-header {
  position: sticky;
  top: 0;
  z-index: 10;
  background: rgb(19 22 19 / 0.92);
  border-bottom: 1px solid var(--color-border);
  backdrop-filter: blur(12px);
}

.site-header__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: min(100% - 32px, 1120px);
  min-height: 64px;
  margin-inline: auto;
}

.brand-logo,
nav a {
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  text-decoration: none;
}

.brand-logo {
  color: var(--color-primary);
  font-size: 1.1rem;
  font-weight: 700;
}

.brand-logo::before {
  color: var(--color-secondary);
  content: '> ';
}

.desktop-nav {
  display: none;
  gap: 32px;

  a {
    color: var(--color-text-muted);
    font-size: 0.875rem;
  }

  a:hover,
  a.router-link-active {
    color: var(--color-text);
  }

  a.router-link-active {
    text-decoration: underline;
    text-decoration-color: var(--color-primary);
    text-underline-offset: 8px;
  }
}

.menu-button {
  display: inline-grid;
  width: 40px;
  height: 40px;
  cursor: pointer;
  border-radius: 6px;
  place-items: center;
  font-size: 1.4rem;
}

.menu-button:hover {
  background: var(--color-surface-hover);
}

.mobile-nav {
  display: grid;
  padding: 8px 16px 20px;

  a {
    padding: 12px;
    color: var(--color-text-muted);
    border-radius: 4px;
  }

  a:hover,
  a.router-link-active {
    color: var(--color-text);
    background: var(--color-surface);
  }
}

@media (width >= 768px) {
  .site-header__inner {
    width: min(100% - 64px, 1120px);
    min-height: 72px;
  }

  .desktop-nav {
    display: flex;
  }

  .menu-button,
  .mobile-nav {
    display: none;
  }
}
</style>
