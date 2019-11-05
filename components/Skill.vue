<template>
  <v-card>
    <v-card-title class="secondary--text">
      Skill
    </v-card-title>
    <v-container>
      <hexagon-skill></hexagon-skill>
    </v-container>
  </v-card>
</template>

<script>
import HexagonSkill from '~/components/HexagonSkill'

export default {
  components: {
    HexagonSkill
  }
}
</script>
