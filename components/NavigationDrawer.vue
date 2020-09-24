<template>
  <div>
    <v-navigation-drawer v-model="drawer" app width="200">
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
    <v-btn v-if="!drawer" absolute fab icon @click="drawer = !drawer">
      <v-icon>mdi-menu</v-icon>
    </v-btn>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, getCurrentInstance } from '@vue/composition-api'

const getVuetify = () => {
  const vm = getCurrentInstance()
  return vm!.$vuetify
}

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
    const drawer = ref(getVuetify().breakpoint.sm)
    return {
      links,
      drawer,
    }
  },
})
</script>
