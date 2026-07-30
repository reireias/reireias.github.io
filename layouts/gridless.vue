<template>
  <v-app theme="dark" class="app-container">
    <navigation-drawer></navigation-drawer>
    <v-main class="fill-height">
      <slot />
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
