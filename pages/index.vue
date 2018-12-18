<template>
  <div>
    <v-img src="icon.jpg" height="200px" width="200px" />
    <p><i class="fab fa-twitter" aria-hidden="true"></i>@reirei_As</p>
    <p><i class="fab fa-github"></i>reireias</p>
    <skill />
  </div>
</template>

<script>
import Skill from '~/components/Skill.vue'
export default {
  components: {
    Skill
  }
}
</script>
