<template>
  <div class="migration-page">
    <p class="migration-page__label">// moved</p>
    <h1>SkillsのURLが変わりました</h1>
    <p>スキルと経験の詳細は、新しいSkillsページでご覧いただけます。</p>
    <NuxtLink to="/skills">Skillsを見る →</NuxtLink>
  </div>
</template>

<script setup lang="ts">
defineOptions({ name: 'SkillMigrationPage' })
</script>

<style scoped>
.migration-page {
  min-height: 55svh;
  padding: 96px 0;
}

.migration-page__label,
a {
  color: var(--color-primary);
  font-family: var(--font-technical);
}

h1 {
  margin: 8px 0 16px;
  font-size: clamp(2rem, 6vw, 3.5rem);
  line-height: 1.1;
}

p:not(.migration-page__label) {
  color: var(--color-text-muted);
}

a {
  display: inline-flex;
  min-height: 44px;
  align-items: center;
  text-decoration: none;
}
</style>
