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
      <v-row>
        <v-col v-for="account in accounts" :key="account.name" cols="6" md="4">
          <v-card :href="account.url" target="_blank" :color="account.color">
            <v-card-title>
              <v-icon>{{ account.icon }}</v-icon>
              <div style="margin-left: 10px">
                {{ account.name }}
              </div>
            </v-card-title>
          </v-card>
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
        color: '#363636',
      },
      {
        name: 'Twitter',
        value: 'reirei_As',
        url: 'http://twitter.com/reirei_As',
        icon: 'mdi-twitter',
        color: '#1da1f2',
      },
      {
        name: 'Qiita',
        value: 'reireias',
        url: 'http://qiita.com/reireias',
        icon: 'mdi-link',
        color: '#55c500',
      },
      {
        name: 'Speaker Deck',
        value: 'reireias',
        url: 'https://speakerdeck.com/reireias',
        icon: 'mdi-link',
        color: '#009287',
      },
    ]
    return { accounts, profiles }
  },
})
</script>
