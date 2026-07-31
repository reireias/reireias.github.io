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
          <v-card color="#363636">
            <v-card-title>自己紹介</v-card-title>
            <v-card-text>
              <p>
                ヘルステックベンチャーでプリンシパルエンジニアとして働くSRE /
                セキュリティエンジニアです。<br />複数サービスのアーキテクチャ設計、インフラ基盤の構築・運用、ボトルネック改善やコスト最適化等のSRE業務を中心に、Ruby
                on Railsを用いたアプリケーション開発も担当したりします。
              </p>
              <p>
                セキュリティエンジニアとして、全社横断のセキュリティ対策やKPI策定、社内教育、開発ルールの策定なども担当しています。
              </p>
              <p>
                最近はAIの台頭で変化する開発の在り方に対して、SRE /
                セキュリティの知見を活かしたガードレールや仕組み・組織づくりに関心があります。
              </p>
              <p>
                常に新技術や新しいことにチャレンジできる環境に身を置くように心がけています。
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
          <a
            :href="account.url"
            target="_blank"
            class="social-card"
            :class="`social-bg-${account.name
              .toLowerCase()
              .replace(/\s+/g, '')}`"
          >
            <v-icon>{{ account.icon }}</v-icon>
            <span class="social-name">{{ account.name }}</span>
          </a>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
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

<style scoped lang="scss">
.social-card {
  display: flex;
  align-items: center;
  padding: 16px;
  border-radius: 4px;
  color: #ffffff;
  text-decoration: none;

  .social-name {
    margin-left: 10px;
    font-size: 1.25rem;
    font-weight: 500;
  }
}
.social-bg-github {
  background-color: #363636;
}
.social-bg-twitter {
  background-color: #1da1f2;
}
.social-bg-qiita {
  background-color: #55c500;
}
.social-bg-speakerdeck {
  background-color: #009287;
}
.social-bg-zenn {
  background-color: #3ea8ff;
}
.social-bg-lapras {
  background-color: #3d5afe;
}
</style>
