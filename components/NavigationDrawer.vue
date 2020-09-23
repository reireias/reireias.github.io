<template>
  <v-navigation-drawer app width="200">
    <v-list>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title primary--text"
            >reireas.dev</v-list-item-title
          >
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list-item v-for="link in links" :key="link.to" :to="link.to" nuxt>{{
        link.name
      }}</v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
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
    return { links }
  },
})
</script>
