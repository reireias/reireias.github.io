<template>
  <div>
    <page-title title="Profile"></page-title>

    <v-container>
      <v-row justify="center">
        <v-avatar color="white" size="128">
          <v-img src="/icon.png"></v-img>
        </v-avatar>
      </v-row>

      <key-value-row
        v-for="profile in profiles"
        :key="profile.key"
        :k="profile.key"
        :v="profile.value"
      ></key-value-row>
      <v-row v-for="account in accounts" :key="account.name" justify="center">
        <v-col>
          <div>
            <v-icon v-if="account.icon" v-text="account.icon"></v-icon>
            {{ account.name }}
          </div>
        </v-col>
        <v-col>
          <div class="title">
            <a
              class="secondary--text"
              :href="account.url"
              target="_blank"
              v-text="account.value"
            ></a>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import PageTitle from '@/components/PageTitle.vue'
import KeyValueRow from '@/components/KeyValueRow.vue'

export default defineComponent({
  components: {
    PageTitle,
    KeyValueRow,
  },
  setup() {
    const profiles = [
      {
        key: '生年月日',
        value: '1988/xx/xx',
      },
      {
        key: '職業',
        value: 'SRE/Webアプリケーションエンジニア',
      },
      {
        key: '好きな動物',
        value: '猫科全般',
      },
      {
        key: '好きなOS',
        value: 'Linux',
      },
      {
        key: '好きなLinux Distribution',
        value: 'Linux Mint',
      },
      {
        key: '趣味',
        value: '新技術で遊ぶこと/自作PC/ゲーム全般',
      },
      {
        key: '備考',
        value: 'Japan MENSA会員',
      },
    ]
    const accounts = [
      {
        name: 'GitHub',
        value: 'reireias',
        url: 'http://github.com/reireias',
        icon: 'mdi-github',
        color: 'accent',
      },
      {
        name: 'Twitter',
        value: 'reirei_As',
        url: 'http://twitter.com/reirei_As',
        icon: 'mdi-twitter',
        color: 'info-darken',
      },
      {
        name: 'Qiita',
        value: 'reireias',
        url: 'http://qiita.com/reireias',
        color: 'info',
      },
      {
        name: 'Speaker Deck',
        value: 'reireias',
        url: 'https://speakerdeck.com/reireias',
        color: 'accent',
      },
    ]
    return { accounts, profiles }
  },
})
</script>
