<template>
  <v-app dark>
    <v-toolbar fixed app :clipped-left="clipped">
      <v-toolbar-title v-text="title"></v-toolbar-title>
    </v-toolbar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      title: 'Vuetify.js'
    }
  }
}
</script>
