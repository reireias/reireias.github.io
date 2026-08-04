<template>
  <div>
    <PageTitle title="Skills" />
    <div class="skill-list">
      <details v-for="skill in skills" :key="skill.header" class="surface-card">
        <summary>{{ skill.header }}</summary>
        <div class="skill-content">
          <template v-for="(line, index) in skill.content" :key="index">
            <p v-if="typeof line === 'string'">{{ line }}</p>
            <ul v-else>
              <li v-for="item in line" :key="item">{{ item }}</li>
            </ul>
          </template>
        </div>
      </details>
    </div>
  </div>
</template>

<script setup lang="ts">
import skills from '@/constants/skills'
</script>

<style scoped lang="scss">
.skill-list {
  display: grid;
  gap: 16px;
  padding-bottom: 64px;
}
details {
  overflow: hidden;
}
summary {
  padding: 20px 24px;
  font-size: 1.2rem;
  font-weight: 600;
  cursor: pointer;
}
summary:hover {
  background: var(--color-surface-hover);
}
.skill-content {
  padding: 0 24px 20px;
  color: var(--color-text-muted);
}
.skill-content p,
.skill-content ul {
  margin: 8px 0;
}
</style>
