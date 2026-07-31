<template>
  <v-app theme="dark" class="app-container">
    <navigation-drawer></navigation-drawer>
    <v-main>
      <v-container>
        <v-row justify="center">
          <v-col cols="12" sm="8">
            <slot />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import NavigationDrawer from '@/components/NavigationDrawer.vue'
</script>

<style scoped>
.app-container {
  background-color: #272822;
}
</style>
