<template>
  <div>
    <PageTitle
      title="Experience"
      description="アプリケーション開発からSRE・セキュリティへ。技術を仕組みに変え、組織へ展開してきた経験を紹介します。"
    />

    <section class="career-summary" aria-labelledby="career-summary-heading">
      <SectionHeading
        id="career-summary-heading"
        index="01"
        label="Summary"
        title="これまでの経験と現在の担当領域"
      />
      <div class="career-summary__copy">
        <p>
          BtoB
          SaaSのアプリケーション開発、インフラ構築、開発チームのリードを経験した後、SREとセキュリティへ担当領域を広げました。現在はプリンシパルエンジニアとして、プラットフォームSREとセキュリティを担当しています。
        </p>
        <p>
          各サービスの技術支援に加え、共通基盤や開発標準の整備、技術ロードマップの策定、社内教育に取り組んでいます。直近では、AIを利用した開発のための実行基盤、ガードレール、可観測性の整備を進めています。
        </p>
      </div>
    </section>

    <section class="experience-section" aria-labelledby="work-heading">
      <SectionHeading
        id="work-heading"
        index="02"
        label="Work"
        title="職歴と代表実績"
        description="役割と担当範囲に加え、組織へ残した仕組みや成果をテーマ別に掲載しています。"
      />
      <div class="work-list">
        <WorkExperience
          v-for="experience in experiences"
          :key="experience.organization"
          :experience="experience"
        />
      </div>
    </section>

    <section class="experience-section" aria-labelledby="education-heading">
      <SectionHeading
        id="education-heading"
        index="03"
        label="Education"
        title="学歴"
      />
      <ExperienceTimeline :items="educationTimeline" />
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import experiences from '@/constants/experiences'
import timeline from '@/constants/timeline'

const educationTimeline = computed(() =>
  timeline.filter((item) => item.color !== 'warning')
)
</script>

<style scoped>
.career-summary__copy {
  max-width: 760px;
  color: var(--color-text-muted);
  font-size: 1.05rem;
}

.career-summary__copy p {
  margin: 0;
}

.career-summary__copy p + p {
  margin-top: 16px;
}

.experience-section {
  padding-top: 96px;
}

.work-list {
  display: grid;
  gap: 80px;
}
</style>
