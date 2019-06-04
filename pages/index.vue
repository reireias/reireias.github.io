<template>
  <v-layout align-center justify-center row wrap>
    <v-flex xs12>
      <profile></profile>
    </v-flex>
    <v-flex xs12>
      <hexagon-skill></hexagon-skill>
    </v-flex>
  </v-layout>
</template>

<script>
import Profile from '~/components/Profile'
import HexagonSkill from '~/components/HexagonSkill.vue'
export default {
  components: {
    Profile,
    HexagonSkill
  }
}
</script>

<style>
.title-text {
  padding-left: 20px;
}
</style>
