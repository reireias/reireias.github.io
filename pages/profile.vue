<template>
  <div>
    <page-title title="Profile"></page-title>

    <v-container>
      <v-row justify="center">
        <v-avatar color="#5e5e5e" size="128">
          <v-img src="/icon.png"></v-img>
        </v-avatar>
      </v-row>

      <v-row>
        <v-col>
          <v-card>
            <v-card-title>自己紹介</v-card-title>
            <v-card-text>
              <p>
                ヘルステックベンチャーで働くSREエンジニアです。<br />アーキテクチャ設計、インフラ構築、モニタリング環境構築、ボトルネック改善等のSRE的業務を中心にしつつも、Ruby
                on Railsを用いたアプリケーション開発もたまに担当したりします。
              </p>
              <p>
                常に新技術や新しいことにチャレンジできる環境に見を置くように心がけています。
              </p>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>

      <key-value-row
        v-for="profile in profiles"
        :key="profile.key"
        :k="profile.key"
        :v="profile.value"
      ></key-value-row>
    </v-container>

    <page-title title="Socials" style="margin-top: 20px"></page-title>

    <v-container>
      <v-row>
        <v-col v-for="account in socials" :key="account.name" cols="6" md="4">
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
import socials from '@/constants/socials'
import profiles from '@/constants/profiles'

export default defineComponent({
  components: {
    PageTitle,
    KeyValueRow,
  },
  setup() {
    return { socials, profiles }
  },
})
</script>
