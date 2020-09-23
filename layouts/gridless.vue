<template>
  <v-app>
    <navigation-drawer></navigation-drawer>
    <v-main>
      <nuxt />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import NavigationDrawer from '@/components/NavigationDrawer.vue'

export default defineComponent({
  components: {
    NavigationDrawer,
  },
})
</script>
