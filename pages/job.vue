<template>
  <div class="job-page">
    <page-title title="Job"></page-title>

    <v-timeline side="end" align="start">
      <v-timeline-item
        v-for="item in formattedTimeline"
        :key="item.title"
        size="small"
        :dot-color="item.hexColor"
      >
        <template #opposite>
          <div class="title" style="margin-top: 4px; color: #fff">
            {{ item.year }}
          </div>
        </template>
        <v-card color="#363636">
          <v-card-title :style="{ color: item.hexColor }">{{
            item.title
          }}</v-card-title>
          <v-card-text>{{ item.text }}</v-card-text>
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import PageTitle from '@/components/PageTitle.vue'
import timeline from '@/constants/timeline'

const colorMap: Record<string, string> = {
  secondary: '#66d9ef',
  accent: '#ae81ff',
  warning: '#fd971f',
}

export default defineComponent({
  components: {
    PageTitle,
  },
  setup() {
    const formattedTimeline = computed(() =>
      timeline.map((item) => ({
        ...item,
        hexColor: colorMap[item.color] || '#a6e22e',
      }))
    )
    return { formattedTimeline }
  },
})
</script>

<style lang="scss">
.job-page {
  .v-timeline-item__body {
    width: 100%;
  }
}
</style>
