<template>
  <div>
    <PageTitle
      title="Experience"
      description="学歴とこれまでの職歴を掲載しています。"
    />
    <ExperienceTimeline :items="timeline" />
  </div>
</template>

<script setup lang="ts">
import timeline from '@/constants/timeline'
</script>
