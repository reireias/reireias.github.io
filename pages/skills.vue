<template>
  <v-container>
    <v-row justify="center">
      <div class="display-3">Skills</div>
    </v-row>
    <v-row justify="center">
      <v-col cols="12" sm="8">
        <sre-skill-card></sre-skill-card>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="12" sm="8">
        <web-skill-card></web-skill-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import SreSkillCard from '~/components/SreSkillCard.vue'
import WebSkillCard from '~/components/WebSkillCard.vue'

export default defineComponent({
  components: {
    SreSkillCard,
    WebSkillCard,
  },
})
</script>
