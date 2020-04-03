<template>
  <v-container>
    <v-row justify="center">
      <div class="display-3">Skills</div>
    </v-row>
    <v-row justify="center">
      <v-col cols="12" sm="8">
        <skill-card></skill-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import SkillCard from '~/components/SkillCard'

export default {
  components: {
    SkillCard,
  },
}
</script>
