<template>
  <div>
    <v-navigation-drawer v-model="drawer" app width="200" color="#363636">
      <v-list>
        <v-list-item>
          <v-list-item-title class="brand-logo">reireas.dev</v-list-item-title>
        </v-list-item>

        <v-divider></v-divider>

        <v-list-item v-for="link in links" :key="link.to" :to="link.to" nuxt>{{
          link.name
        }}</v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-btn
      v-if="!drawer"
      fixed
      top
      left
      fab
      small
      class="ma-2"
      style="z-index: 6"
      @click="drawer = !drawer"
    >
      <v-icon>mdi-menu</v-icon>
    </v-btn>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const links = [
      {
        name: 'Home',
        to: '/',
      },
      {
        name: 'Profile',
        to: '/profile',
      },
      {
        name: 'Skill',
        to: '/skill',
      },
      {
        name: 'Job',
        to: '/job',
      },
      {
        name: 'Article',
        to: '/articles',
      },
      {
        name: 'Sandbox',
        to: '/sandbox',
      },
    ]
    const drawer = ref(null)
    return {
      links,
      drawer,
    }
  },
})
</script>

<style scoped lang="scss">
.brand-logo {
  font-size: 1.25rem;
  font-weight: 500;
  letter-spacing: 0.0125em;
  line-height: 2rem;
  color: rgb(var(--v-theme-primary));
}
</style>
