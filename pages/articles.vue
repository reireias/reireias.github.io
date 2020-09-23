<template>
  <v-container>
    <page-title title="Article"></page-title>

    <v-row justify="center">
      <v-col cols="12" sm="6">
        <v-card
          href="https://qiita.com/reireias/items/0d87de18f43f27a8ed9b"
          target="_blank"
        >
          <v-img src="/article01.jpg" height="300"></v-img>
          <v-card-title>
            ラズパイ4で作るディスプレイ付きKubernetesクラスター
          </v-card-title>
          <v-card-text> こだわりが詰まった作品です </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6">
        <v-card
          href="https://qiita.com/reireias/items/2e377b2a42e4cb3aded1"
          target="_blank"
        >
          <v-img src="/article02.png" height="300"></v-img>
          <v-card-title>
            Firebase + Nuxt.js + RaspberryPiで作る猫監視システム
          </v-card-title>
          <v-card-text>
            Firebaseの様々な機能を試してるうちに思いついたシステムです
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import PageTitle from '@/components/PageTitle.vue'

export default defineComponent({
  layout: 'gridless',
  components: {
    PageTitle,
  },
})
</script>
