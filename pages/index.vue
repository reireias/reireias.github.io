<template>
  <div>
    <my-header style="margin: 100px;"></my-header>
    <div class="title-text display-4 font-weight-thin">
      Profile
    </div>
    <profile></profile>
    <div class="title-text display-4 font-weight-thin">
      Skills
    </div>
    <hexagon-skill></hexagon-skill>
  </div>
</template>

<script>
import Header from '~/components/Header'
import Profile from '~/components/Profile'
import HexagonSkill from '~/components/HexagonSkill.vue'
export default {
  components: {
    'my-header': Header,
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
