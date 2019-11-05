<template>
  <v-card>
    <v-card-title class="secondary--text">
      Account
    </v-card-title>
    <v-container>
      <v-row v-for="account in accounts" :key="account.name" justify="center">
        <v-col cols="2">{{ account.name }}</v-col>
        <v-col cols="2"
          ><a :hred="account.url">{{ account.text }}</a></v-col
        >
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      accounts: [
        {
          name: 'GitHub',
          url: 'https://github.com/reireias',
          text: 'reireias'
        },
        {
          name: 'Twitter',
          url: 'https://twitter.com/reirei_As',
          text: 'reirei_As'
        },
        {
          name: 'Qiita',
          url: 'https://qiita.com/reireias',
          text: 'reireias'
        }
      ]
    }
  }
}
</script>
