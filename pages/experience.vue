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
        title="インフラから組織まで、横断して課題を解く"
      />
      <div class="career-summary__copy">
        <p>
          BtoB
          SaaSのアプリケーション開発とリーディングを経験した後、SREへ専門領域を広げました。現在はプリンシパルエンジニアとして、プラットフォームSREとセキュリティを中心に活動しています。
        </p>
        <p>
          個別の課題を解くだけでなく、コード化・標準化・教育を通じて、複数のサービスやチームが再利用できる仕組みとして残すことを重視しています。直近はAI駆動開発の基盤、ガードレール、可観測性にも取り組んでいます。
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
