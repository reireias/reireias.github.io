<template>
  <div>
    <page-title title="Job"></page-title>

    <v-card flat>
      <v-card-title class="secondary--text"> 職歴 </v-card-title>
      <v-container>
        <v-row justify="center">
          <v-col>
            <div>富士ゼロックス株式会社（2013年〜2019年）</div>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <ul>
              <li>
                機械翻訳サービス、中小企業向けBtoB向けクラウドストレージサービス、大企業向けクラウドストレージサービスなどを担当
              </li>
            </ul>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <div>メドピア株式会社（2019年〜）</div>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <ul>
              <li>
                SRE兼サーバーサイドエンジニアとして、サービスのコンテナ化やRuby
                on Railsでの実装を担当
              </li>
            </ul>
          </v-col>
        </v-row>
      </v-container>
    </v-card>

    <br />

    <v-card flat>
      <v-card-title class="secondary--text"> 学歴 </v-card-title>
      <v-container>
        <v-row>
          <v-col>
            <div>筑波大学（2007年〜2011年）</div>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <ul>
              <li>理工学群 工学システム学類</li>
              <li>学士（工学）を取得</li>
            </ul>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <div>筑波大学大学院（2011年〜2013年）</div>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <ul>
              <li>システム情報工学研究科 リスク工学専攻</li>
              <li>修士（工学）を取得</li>
            </ul>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import PageTitle from '@/components/PageTitle.vue'

export default defineComponent({
  components: {
    PageTitle,
  },
})
</script>
