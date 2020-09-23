<template>
  <div>
    <page-title title="Sandbox"></page-title>

    <v-row justify="center">
      <nuxt-link class="display-1 secondary--text" to="/sandbox/anime"
        >Anime</nuxt-link
      >
    </v-row>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import PageTitle from '@/components/PageTitle.vue'

export default defineComponent({
  components: {
    PageTitle,
  },
})
</script>
