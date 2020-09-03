<template>
  <v-app>
    <v-navigation-drawer app>
      <v-list>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="title">reireas.dev</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list-item v-for="link in links" :key="link.to" :to="link.to" nuxt>{{
          link.name
        }}</v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <v-container>
        <v-row justify="center">
          <v-col cols="12" sm="8">
            <nuxt />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
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
    ]
    return { links }
  },
})
</script>
