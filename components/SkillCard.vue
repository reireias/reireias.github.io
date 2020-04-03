<template>
  <v-card class="skill-card" flat>
    <v-card-title class="bottom-border-primary">
      できること≒業務経験
    </v-card-title>
    <v-container>
      <v-row justify="center">
        <v-col>
          <div class="left-border-primary">SRE</div>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col>
          <ul>
            <li>AWS/GCPでのインフラ構築</li>
            <li>Terraform/CloudFormationによるIaCの実現</li>
            <li>CI/CDパイプラインの構築</li>
            <li>アーキテクチャ設計</li>
            <li>AWS Lambda等を用いた各種運用ツールの作成</li>
            <li>
              CircleCI/Travis CI/GitHub ActionsによるCI設定および高速化
            </li>
            <li>レガシーシステムからAWS/GCPへの移行</li>
            <li>インフラ/低レイヤー層の社内教育</li>
            <li>
              サイト全体のパフォーマンス改善(クエリチューニング/キャパシティ設計/CDN等)
            </li>
            <li>DWHとBIツールによる分析基盤の構築</li>
          </ul>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col>
          <div class="left-border-primary">Webアプリケーション開発</div>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col>
          <ul>
            <li>Webアプリケーション開発のリードエンジニア</li>
            <li>開発環境の改善</li>
          </ul>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<style lang="scss">
.skill-card .col {
  align-self: center;
  font-size: 20px;
}
</style>
