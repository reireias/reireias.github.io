<template>
  <div class="skill-page">
    <page-title title="Skill"></page-title>

    <v-expansion-panels v-model="panel" class="panel" multiple>
      <v-expansion-panel
        v-for="(skill, index) in skills"
        :key="skill.header"
        :value="index"
        color="#363636"
        class="skill-panel-item"
      >
        <v-expansion-panel-title>{{ skill.header }}</v-expansion-panel-title>
        <v-expansion-panel-text>
          <template v-for="(line, i) in skill.content">
            <p v-if="typeof line === 'string'" :key="`str-${i}`">{{ line }}</p>
            <ul v-else :key="`arr-${i}`">
              <li v-for="(item, j) in line" :key="j">{{ item }}</li>
            </ul>
          </template>
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import PageTitle from '@/components/PageTitle.vue'
import skills from '@/constants/skills'

export default defineComponent({
  components: {
    PageTitle,
  },
  setup() {
    const panel = ref([])
    return { skills, panel }
  },
})
</script>

<style lang="scss">
.skill-page {
  .panel {
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .v-expansion-panel {
    margin-top: 16px;
  }
}
</style>
