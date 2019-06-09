<template>
  <v-container grid-list-md>
    <v-layout
      v-for="account in accounts"
      :key="account.name"
      align-center
      justify-center
      row
      wrap
    >
      <v-flex xs6 sm4 md2>
        <div class="account-text">{{ account.name }}:</div>
      </v-flex>
      <v-flex xs6 sm4 md2>
        <div class="account-text">
          <a class="secondary--text" :href="account.url">{{ account.text }}</a>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
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

<style>
.account-text {
  font-size: 34px;
  line-height: 40px;
}
@media (max-width: 600px) {
  .account-text {
    font-size: 24px;
  }
}
</style>
