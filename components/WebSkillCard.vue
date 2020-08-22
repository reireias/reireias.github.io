<template>
  <v-card class="web-skill-card" flat>
    <v-card-title class="bottom-border-accent">
      Webアプリケーション開発
    </v-card-title>
    <v-container>
      <v-row justify="center">
        <v-col>
          <div class="left-border-accent">
            Webアプリケーション開発のリーディング
          </div>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col>
          <p>
            過去にBtoBやBtoCを含め、6プロダクトほどサービス開発を経験してきました。
          </p>
          <p>
            セキュリティや可用性、性能等の非機能要件を考慮した開発や、メンバーのスキルや学習コスト/メンテナンスコストを考慮した技術選択等を実践できます。<br />
            認証や非同期処理、大規模システムの結合ビルドの調整等、比較的難易度の高い部分を担当することが多いです。
          </p>
          <p>
            最近は若手層への教育を行いながら開発リーダーを務めることが多いです。(スクラムマスター、プロダクトオーナーではないので、開発外部との交渉/調整等は専門外ですが)
          </p>
          <p>
            また、IPAの資格で応用情報技術者、セキュリティスペシャリスト、データベーススペシャリストを保有しています。
          </p>
          <p>
            1年以上業務で利用経験のある言語: Ruby, Java, C#
            <br />
            同フレームワーク: Ruby on Rails, Spring, Vue.js
          </p>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col>
          <div class="left-border-info-darken">開発環境の構築や改善</div>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col>
          <p>
            Webアプリケーションと本番環境のインフラ構成に加え、DockerやLinux等の知識があるため、開発環境まわりの構築や改善を実施してきました。<br />
            これらの知識を組み合わせることで、本番環境をなるべく再現しつつも起動が高速で扱いやすいローカルの開発環境を構築したり、クレデンシャル/API
            Tokenのセキュリティや職能/職種に合わせた権限設定を考慮したリポジトリや成果物管理の仕組み等、開発環境とその周辺を構築してきました。
          </p>
          <p>
            技術的にこれらを構築するだけでなく、開発フローやブランチ戦略の考案/改善といったことも得意だったりします。
          </p>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
export default defineComponent({})
</script>

<style lang="scss">
.web-skill-card .col {
  align-self: center;
  font-size: 20px;
  p {
    padding-left: 20px;
  }
}
</style>
