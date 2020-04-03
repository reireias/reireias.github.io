<template>
  <v-container>
    <v-row justify="center">
      <div class="display-3">Skills</div>
    </v-row>
    <v-row justify="center">
      <v-col cols="12" sm="8">
        <skill-card></skill-card>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="12" sm="8">
        <v-card class="language-card" flat>
          <v-card-title class="bottom-border-primary">
            プログラミング言語
          </v-card-title>
          <v-container>
            <v-row v-for="lang in langs" :key="lang.name" justify="center">
              <v-col>
                <div class="left-border-primary">
                  <v-icon v-text="lang.icon"></v-icon>
                  &nbsp;{{ lang.name }}
                </div>
                <div>
                  <ul>
                    <li
                      v-for="line in lang.lines"
                      :key="line"
                      v-text="line"
                    ></li>
                  </ul>
                </div>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="12" sm="8">
        <v-card flat>
          <v-card-title class="bottom-border-primary">
            IaaS
          </v-card-title>
          <v-card-text>
            <div class="left-border-primary">
              <v-icon>mdi-aws</v-icon>
              &nbsp;AWS
            </div>
            <ul>
              <li>業務経験5年</li>
              <li>
                AWSソリューションアーキテクトアソシエイト資格を取得（2018年）
              </li>
            </ul>
            <div class="left-border-primary">
              <v-icon>mdi-google-cloud</v-icon>
              &nbsp;GCP
            </div>
            <ul>
              <li>趣味で触る程度</li>
            </ul>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="12" sm="8">
        <v-card flat>
          <v-card-title class="bottom-border-primary">
            OS
          </v-card-title>
          <v-card-text>
            本番環境で構築/運用をしたことのあるOS<br />
            RHEL/CentOS/Amazon Linux/Ubuntu/Alpine
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="12" sm="8">
        <v-card flat>
          <v-card-title class="bottom-border-primary">
            ミドルウェア
          </v-card-title>
          <v-card-text>
            本番環境で構築/運用をしたことのあるミドルウェア<br />
            Nginx, MySQL, PostgreSQL, Redis, Elasticsearch, Postfix, Squid
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="12" sm="8">
        <v-card flat>
          <v-card-title class="bottom-border-primary">
            SaaS
          </v-card-title>
          <v-card-text>
            本番環境で運用をしたことのあるSaaS<br />
            SendGrid, DataDog, Rollbar
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="12" sm="8">
        <v-card flat>
          <v-card-title class="bottom-border-primary">
            ツール
          </v-card-title>
          <v-card-text>
            本番環境で運用をしたことのあるツール<br />
            Terraform, Docker, Vagrant, VMware, Prometheus, Git, Vim, tmux, zsh
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import SkillCard from '~/components/SkillCard'

export default {
  components: {
    SkillCard,
  },
  data() {
    return {
      langs: [
        {
          name: 'Ruby',
          icon: 'mdi-language-ruby',
          lines: ['実務経験1年', 'Webサービス開発で利用'],
        },
        {
          name: 'Java',
          icon: 'mdi-language-java',
          lines: ['実務経験6年', 'Webサービス開発で利用'],
        },
        {
          name: 'Python',
          icon: 'mdi-language-python',
          lines: ['実務経験3年', '主にCLIツール、Lambda用コードとして利用'],
        },
        {
          name: 'Golang',
          icon: 'mdi-language-go',
          lines: ['実務経験2年', '主にCLIツール、Lambda用コードとして利用'],
        },
        {
          name: 'C#',
          icon: 'mdi-language-csharp',
          lines: ['実務経験2年', 'Webサービス開発で利用'],
        },
        {
          name: 'javascript',
          icon: 'mdi-language-javascript',
          lines: ['実務経験7年', 'Webサービス開発で利用'],
        },
      ],
    }
  },
}
</script>

<style lang="scss">
.language-card .col {
  align-self: center;
  font-size: 20px;
}
</style>
