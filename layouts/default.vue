<template>
  <v-app>
    <navigation-drawer></navigation-drawer>
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
import NavigationDrawer from '@/components/NavigationDrawer.vue'

export default defineComponent({
  components: {
    NavigationDrawer,
  },
})
</script>
