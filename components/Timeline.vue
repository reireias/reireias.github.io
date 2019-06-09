<template>
  <v-container grid-list-md>
    <v-layout>
      <v-flex xs12>
        <v-timeline dark :dense="dense">
          <v-timeline-item
            v-for="item in history"
            :key="item.title"
            :color="item.color"
          >
            <template v-slot:opposite>
              <span
                class="timeline-headline font-weight-bold"
                v-text="item.year"
              ></span>
            </template>
            <v-card dark>
              <v-card-title
                v-if="dense"
                :class="`timeline-card-title ${item.color}--text`"
              >
                {{ item.year }} {{ item.title }}
              </v-card-title>
              <v-card-title
                v-else
                :class="`timeline-card-title ${item.color}--text`"
              >
                {{ item.title }}
              </v-card-title>
              <v-card-text v-if="item.text" class="timeline-card-text">
                <ul>
                  <li v-for="textItem in item.text" :key="textItem">
                    {{ textItem }}
                  </li>
                </ul>
              </v-card-text>
            </v-card>
          </v-timeline-item>
        </v-timeline>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      dense: false,
      history: [
        {
          year: 2007,
          title: '筑波大学 入学',
          color: 'primary',
          text: ['理工学群 工学システム学類へ入学', '学士(工学)を取得']
        },
        {
          year: 2011,
          title: '筑波大学大学院 進学',
          color: 'primary',
          text: [
            'システム情報工学研究科 リスク工学専攻へ進学',
            '研究テーマはクラスタリング(クラスター分析)',
            '10本以上の査読付き論文(論文誌2本、国際学会4本)の執筆が評価され、卒業時に研究科長賞を授与',
            '修士(工学)を取得'
          ]
        },
        {
          year: 2012,
          title: 'JAPAN MENSA会員に',
          color: 'secondary'
        },
        {
          year: 2013,
          title: '富士ゼロックス株式会社 入社',
          color: 'primary',
          text: [
            'ソフトウェア開発部門に配属',
            '機械翻訳サービス、中小企業向けBtoB向けクラウドストレージサービス、大企業向けクラウドストレージサービスなどを担当',
            '業務内容は仕様策定、フロントエンド/サーバーサイドの実装、AWSへの移行、インフラ構築、CI/CDパイプラインの構築、マイクロサービスアーキテクチャの検討など',
            '採用されていた技術的には、Java, javascript, C#, Nginx, Tomcat, PostgreSQL, AWSなど'
          ]
        },
        {
          year: 2018,
          title: 'メドピア株式会社 入社',
          color: 'primary',
          text: [
            'SRE兼サーバーサイドエンジニアとして、サービスのコンテナ化やRuby on Railsでの実装を担当'
          ]
        }
      ]
    }
  },
  mounted() {
    this.handleResize()
    window.addEventListener('resize', this.handleResize)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    handleResize() {
      this.dense = window.innerWidth < 600
    }
  }
}
</script>

<style>
.timeline-headline {
  font-size: 24px;
}
.timeline-card-title {
  font-size: 20px;
  font-weight: 500;
}
.timeline-card-text {
  padding-top: 0px;
}
</style>
