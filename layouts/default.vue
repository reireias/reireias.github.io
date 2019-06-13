<template>
  <v-app dark>
    <v-content>
      <nuxt />
    </v-content>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      title: 'Tech or Cat'
    }
  },
  head() {
    return {
      title: this.title
    }
  }
}
</script>
