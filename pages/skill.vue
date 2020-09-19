<template>
  <div>
    <page-title title="Skill"></page-title>

    <sre-skill-card></sre-skill-card>

    <br />

    <web-skill-card></web-skill-card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import PageTitle from '@/components/PageTitle.vue'
import SreSkillCard from '~/components/SreSkillCard.vue'
import WebSkillCard from '~/components/WebSkillCard.vue'

export default defineComponent({
  layout: 'new',
  components: {
    PageTitle,
    SreSkillCard,
    WebSkillCard,
  },
})
</script>
