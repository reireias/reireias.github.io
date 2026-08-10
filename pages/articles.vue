<template>
  <div>
    <PageTitle
      title="Articles & Talks"
      description="執筆した記事、登壇資料、個人の制作物を掲載しています。"
    />
    <div class="article-summary">
      <p>
        <strong>{{ articles.length }}</strong> works
      </p>
      <p>Article · Talk · Project</p>
    </div>
    <div class="article-grid">
      <ArticleCard
        v-for="(article, index) in articles"
        :key="article.href"
        :article="article"
        :image-loading="index === 0 ? 'eager' : 'lazy'"
        :image-fetch-priority="index === 0 ? 'high' : 'auto'"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import articles from '@/constants/articles'
</script>

<style scoped>
.article-summary {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 8px 24px;
  margin-bottom: 24px;
  padding-bottom: 16px;
  color: var(--color-text-muted);
  font-family: var(--font-technical);
  font-size: 0.75rem;
  border-bottom: 1px solid var(--color-border);
}

.article-summary p {
  margin: 0;
}

.article-summary strong {
  color: var(--color-primary);
}

.article-grid {
  display: grid;
  gap: 24px;
  padding-bottom: 32px;
}

@media (width >= 640px) {
  .article-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
