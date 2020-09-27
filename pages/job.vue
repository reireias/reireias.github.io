<template>
  <div class="job-page">
    <page-title title="Job"></page-title>

    <v-timeline dense>
      <v-timeline-item
        v-for="item in timeline"
        :key="item.title"
        fill-dot
        small
        :color="item.color"
      >
        <template v-slot:opposite class="v-timeline-dense-opposite">
          <div class="title" style="margin-top: 4px">
            {{ item.year }}
          </div>
        </template>
        <v-card>
          <v-card-title :class="`${item.color}--text`">{{
            item.title
          }}</v-card-title>
          <v-card-text>{{ item.text }}</v-card-text>
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import PageTitle from '@/components/PageTitle.vue'
import timeline from '@/constants/timeline'

export default defineComponent({
  components: {
    PageTitle,
  },
  setup() {
    return { timeline }
  },
})
</script>

<style lang="scss">
.job-page {
  .v-timeline--dense {
    .v-timeline-item__opposite {
      display: block;
      position: absolute;
      left: -20px;
    }
  }
}
</style>
