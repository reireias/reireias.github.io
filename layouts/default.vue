<template>
  <v-app>
    <v-content>
      <nuxt />
    </v-content>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      title: 'reireias'
    }
  },
  head() {
    return {
      title: this.title
    }
  }
}
</script>
