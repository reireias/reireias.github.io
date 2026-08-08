<template>
  <a
    :href="article.href"
    class="article-card"
    target="_blank"
    rel="noopener noreferrer"
  >
    <div class="article-card__image">
      <img :src="article.image" :alt="article.title" loading="lazy" />
    </div>
    <div class="article-card__body">
      <p class="article-card__meta">
        {{ article.type }} · {{ article.source }} · {{ article.year }}
      </p>
      <h2>{{ article.title }}</h2>
      <p class="article-card__description">{{ article.description }}</p>
      <ul class="tag-list" aria-label="技術カテゴリ">
        <li v-for="tag in article.tags" :key="tag">{{ tag }}</li>
      </ul>
      <span class="article-card__link">
        詳しく見る <span aria-hidden="true">↗</span>
        <span class="visually-hidden">（新しいタブで開きます）</span>
      </span>
    </div>
  </a>
</template>

<script setup lang="ts">
import type { Article } from '@/constants/articles'

defineProps<{ article: Article }>()
</script>

<style scoped>
.article-card {
  display: grid;
  height: 100%;
  overflow: hidden;
  color: var(--color-text);
  text-decoration: none;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  transition:
    background-color var(--motion-fast) ease-out,
    border-color var(--motion-fast) ease-out,
    transform var(--motion-normal) ease-out;
}

.article-card:hover,
.article-card:focus-visible {
  background: var(--color-surface-hover);
  border-color: var(--color-border-strong);
  transform: translateY(-2px);
}

.article-card__image {
  overflow: hidden;
  background: var(--color-background);
}

img {
  display: block;
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  transition: transform var(--motion-slow) ease-out;
}

.article-card:hover img {
  transform: scale(1.015);
}

.article-card__body {
  display: flex;
  flex-direction: column;
  padding: 24px;
}

.article-card__meta {
  margin: 0 0 12px;
  color: var(--color-secondary);
  font-family: var(--font-technical);
  font-size: 0.75rem;
}

h2 {
  margin: 0;
  font-size: 1.25rem;
  line-height: 1.4;
}

.article-card__description {
  margin: 12px 0 20px;
  color: var(--color-text-muted);
}

.tag-list {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: auto 0 20px;
  padding: 0;
  list-style: none;
}

.tag-list li {
  padding: 3px 8px;
  color: var(--color-secondary);
  font-family: var(--font-technical);
  font-size: 0.75rem;
  background: rgb(102 217 239 / 0.08);
  border-radius: var(--radius-full);
}

.article-card__link {
  color: var(--color-primary);
  font-family: var(--font-technical);
  font-size: 0.875rem;
  font-weight: 600;
}

@media (prefers-reduced-motion: reduce) {
  .article-card,
  img {
    transition: none;
  }

  .article-card:hover,
  .article-card:focus-visible,
  .article-card:hover img {
    transform: none;
  }
}
</style>
