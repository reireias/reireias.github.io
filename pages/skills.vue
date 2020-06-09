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

<script>
import SreSkillCard from '~/components/SreSkillCard'
import WebSkillCard from '~/components/WebSkillCard'

export default {
  components: {
    SreSkillCard,
    WebSkillCard,
  },
}
</script>
