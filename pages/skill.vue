<template>
  <div class="skill-page">
    <page-title title="Skill"></page-title>

    <v-expansion-panels class="panel" multiple>
      <v-expansion-panel v-for="skill in skills" :key="skill.header">
        <v-expansion-panel-header class="title">{{
          skill.header
        }}</v-expansion-panel-header>
        <v-expansion-panel-content>
          <template v-for="(line, i) in skill.content">
            <p v-if="typeof line === 'string'" :key="i">{{ line }}</p>
            <ul v-else :key="i">
              <li v-for="(item, j) in line" :key="j">{{ item }}</li>
            </ul>
          </template>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import PageTitle from '@/components/PageTitle.vue'
import skills from '@/constants/skills'

export default defineComponent({
  components: {
    PageTitle,
  },
  setup() {
    return { skills }
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
