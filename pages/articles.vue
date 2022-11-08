<template>
  <v-container>
    <page-title title="Article"></page-title>

    <v-row>
      <v-col cols="12" sm="6">
        <v-card
          href="https://aws.amazon.com/jp/builders-flash/202211/best-practice-game-day/"
          target="_blank"
        >
          <v-img
            src="https://d1.awsstatic.com/Developer%20Marketing/jp/magazine/2022/thumb_best-practice-game-day.e8c956b14c26eb1cb52e08a998ac38544517f23d.jpg"
            height="300"
          ></v-img>
          <v-card-title>
            よりリアルな攻撃で⾏うゲームデーで得たベストプラクティスとは ?
          </v-card-title>
          <v-card-text>AWSのメディアに寄稿させていただいた記事です</v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6">
        <v-card
          href="https://speakerdeck.com/reireias/improving-efficiency-of-aws-account-operations-by-medpeer-sre-team"
          target="_blank"
        >
          <v-img
            src="https://files.speakerdeck.com/presentations/bbcf01585b25479cb993975808c63709/slide_0.jpg?19573755"
            height="300"
          ></v-img>
          <v-card-title> SREチームによるAWSアカウント運用効率化 </v-card-title>
          <v-card-text> AWSのイベントで登壇した資料です </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="6">
        <v-card
          href="https://tech.medpeer.co.jp/entry/2021/10/01/090000"
          target="_blank"
        >
          <v-img
            src="https://cdn-ak.f.st-hatena.com/images/fotolife/s/satoshitakumi/20210915/20210915154524.png"
            height="300"
          ></v-img>
          <v-card-title>
            AWS Config + Athena +
            QuickSightによる複数AWSアカウント横断でのセキュリティ状態の可視化
          </v-card-title>
          <v-card-text
            >多数のAWSアカウントのセキュリティを可視化する仕組みです</v-card-text
          >
        </v-card>
      </v-col>
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
    </v-row>
    <v-row>
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
      <v-col cols="12" sm="6">
        <v-card
          href="https://speakerdeck.com/reireias/medpeer-aws-seminar-ecs"
          target="_blank"
        >
          <v-img
            src="https://files.speakerdeck.com/presentations/f93589dc55794dc8b722be041a7997d1/slide_0.jpg?672505"
            height="300"
          ></v-img>
          <v-card-title>AWS勉強会 ECS編</v-card-title>
          <v-card-text>社内で開催した勉強会の資料です</v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import PageTitle from '@/components/PageTitle.vue'

export default defineComponent({
  components: {
    PageTitle,
  },
  layout: 'gridless',
})
</script>
