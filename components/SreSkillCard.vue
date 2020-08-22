<template>
  <v-card class="sre-skill-card" flat>
    <v-card-title class="bottom-border-primary">
      SRE
    </v-card-title>
    <v-container>
      <v-row justify="center">
        <v-col>
          <div class="left-border-primary">アーキテクチャ/インフラ構成設計</div>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col>
          <p>
            サービスの要件や特性、フェーズ等を考慮した全体のアーキテクチャ設計を行うことが可能です。
            <br />
            新規サービスの全体設計や既存サービスへの追加等様々なケースに対応可能です。
          </p>
          <p>
            アーキテクチャ設計をAWSやGCPに落とし込んだインフラ設計も得意としています。
            <br />
            特にAWSは等、ELB + EC2 +
            RDSといったAWS黎明期から存在するパターンの他、ECSを利用したコンテナベースのアプリケーションや、Lambdaを利用したサーバーレス構成、SQS/SNSを活用した非同期処理等、Webアプリケーションの構成で利用する一通りのパターンを構築/運用した経験があり、知見が豊富です。
          </p>
          <p>
            インフラ構成の考案だけでなく、将来のコスト見積もりや、アクセス数に応じたスケーリング設計等も幾度か経験があり、意思決定者に対する資料作成/プレゼンテーションも(あまりやりたくはないですが)対応できます。
          </p>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col>
          <div class="left-border-primary-darken">
            Terraform or CloudFormationによるInfrastracture as Codeの実現
          </div>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col>
          <p>
            今まで構築したサービスは全てInfrastructure as Codeを実践しています。
            <br />
            手動でインフラを構築することは、自分のキャリアの中で今後無いと考えています。
          </p>
          <p>
            ツールに関しては、TeraformやCloudFormationを適切に利用したインフラのコード管理を実践できます。
          </p>
          <p>
            Terraformに関してはmodule/workplaceの使い分けや、CI/CDパイプラインへのplan/applyを組み込んだ完全自動化等を業務で実施してきました。
          </p>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col>
          <div class="left-border-secondary">
            CI/CDパイプラインの構築
          </div>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col>
          <p>
            パイプライン自体の構築やCIサービス上での処理の実装、関連するサービス間のセキュアなクレデンシャル管理等が得意です。
          </p>
          <p>
            Linux歴もそこそこ長いので、CI上でのエラー調査も得意としています。
          </p>
          <p>
            GitHub Actions/CircleCI/Travis CI/AWS
            CodePipeineを業務で扱ってきたので、利用できるサービスや構築したいパイプラインの特性に応じて、CI/CDパイプラインを構築することができると考えています。
          </p>
          <p>
            CircleCI OrbsやGitHub
            ActionsのActions等の開発経験もあり、社内で共通で利用する処理のCI用ライブラリ化も可能です。
          </p>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col>
          <div class="left-border-primary">
            運用系ツールの作成と運用
          </div>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col>
          <p>
            もともとサービスのフロントエンド/バックエンドの開発が長く、現在でも社内のリソース状況に応じてアプリケーションの実装を担当したり、趣味での実装の多くがWebアプリケーション開発なので、実はインフラと同等以上にアプリケーション開発のスキルもあったりします。
          </p>
          <p>
            これを活かし、省リソース(要はワンオペ)での管理機能等の小さいサービスのインフラとアプリケーション両方の開発や、日々の運用で利用するような夜間停止やSlack連携などの軽いLambdaアプリケーション等、開発時の便利系スクリプト等の実装を担当することが多くありました。
          </p>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col>
          <div class="left-border-primary-darken">
            Data WarehouseとBI Toolでの分析/可視化基盤の作成
          </div>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col>
          <p>
            ビッグデータ解析とまではいかないですが、それなりに多量のデータを格納し、分析/可視化するための基盤の構築も何度か経験があります。
          </p>
          <p>
            データ量やリアルタイム性、分析する対象に応じて適切なデータ格納方法やデータパイプラインを構築し、ビジネスメンバーの興味関心に応じたダッシュボード作成等を実践してきました。
          </p>
          <p>
            個人的にはエンジニアサイドでSQL等のクエリを実行できるBI環境を提供し、ビジネスサイドでKPIや施策に応じたクエリを日々作成していくスタイルが理想です。
          </p>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col>
          <div class="left-border-secondary">
            PaaS/Docker/低レイヤー技術の社内教育
          </div>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col>
          <p>
            数年前からは社内の若手エンジニアへAWSやDocker、Linux、ネットワーク等の社内勉強会を主催したりもしています。
          </p>
          <p>
            主に入門〜中級くらいの内容で、社内全体のスキルの底上げや、サービス開発/運用時におけるデバッグやバグ修正の補助となるような内容で実施しています。
            <br />
            また、理解度の面からハンズオン形式にこだわって実施しています。
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
.sre-skill-card .col {
  align-self: center;
  font-size: 20px;
  p {
    padding-left: 20px;
  }
}
</style>
