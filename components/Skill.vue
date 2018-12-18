<template>
  <v-container grid-list-md>
    <v-layout
      v-for="category in categories"
      :key="category.name"
      row
      wrap
    >
      <v-flex xs12>
        <v-card>
          <v-card-text>
            {{ category.name }}
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex
        v-for="skill in category.skills"
        :key="skill.name"
        class="skill"
        xs2
        text-xs-center
      >
        <v-card>
          <center>
            <v-card-media
              :src="skill.image"
              height="100px"
              width="100px"
              contain
            />
          </center>
          <v-card-text class="name">
            {{ skill.name }}
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      categories: [
        {
          name: 'Front End',
          skills: [
            {
              name: 'Node.js',
              image: 'nodejs.png'
            },
            {
              name: 'Vue.js',
              image: 'vuejs.png'
            },
            {
              name: 'Nuxt.js',
              image: 'nuxt.png'
            },
            {
              name: 'Vuetify.js',
              image: 'vuetifyjs.png'
            },
            {
              name: 'Riot.js',
              image: 'riot.png'
            },
            {
              name: 'ESLint',
              image: 'eslint.png'
            },
            {
              name: 'Prettier',
              image: 'prettier.png'
            },
            {
              name: 'Babel',
              image: 'babel.png'
            },
            {
              name: 'webpack',
              image: 'webpack.png'
            }
          ]
        },
        {
          name: 'Server Side',
          skills: [
            {
              name: 'Go',
              image: 'golang.png'
            },
            {
              name: 'Python',
              image: 'python.png'
            },
            {
              name: 'C#',
              image: 'csharp.png'
            },
            {
              name: 'Java',
              image: 'java.png'
            },
            {
              name: 'SpringBoot',
              image: 'spring.png'
            },
            {
              name: 'PostgreSQL',
              image: 'postgresql.png'
            },
            {
              name: 'SQLite',
              image: 'sqlite.png'
            }
          ]
        },
        {
          name: 'Infrastructure',
          skills: [
            {
              name: 'AWS',
              image: 'aws.png'
            },
            {
              name: 'GCP',
              image: 'gcp.png'
            },
            {
              name: 'Firebase',
              image: 'firebase.png'
            },
            {
              name: 'Docker',
              image: 'docker.png'
            },
            {
              name: 'VMWare',
              image: 'vmware.png'
            },
            {
              name: 'Ansible',
              image: 'ansible.png'
            },
            {
              name: 'Nginx',
              image: 'nginx.png'
            },
            {
              name: 'Tomcat',
              image: 'tomcat.png'
            }
          ]
        },
        {
          name: 'Linux',
          skills: [
            {
              name: 'RHEL',
              image: 'redhat.png'
            },
            {
              name: 'CentOS',
              image: 'centos.png'
            },
            {
              name: 'Linux Mint',
              image: 'linuxmint.png'
            },
            {
              name: 'Ubuntu',
              image: 'ubuntu.png'
            }
          ]
        },
        {
          name: 'Monitoring',
          skills: [
            {
              name: 'Prometheus',
              image: 'prometheus.png'
            },
            {
              name: 'cAdvisor',
              image: 'cadvisor.png'
            },
            {
              name: 'Grafana',
              image: 'grafana.png'
            },
            {
              name: 'Elasticsearch',
              image: 'elasticsearch.png'
            },
            {
              name: 'Logstash',
              image: 'logstash.png'
            },
            {
              name: 'Kibana',
              image: 'kibana.png'
            }
          ]
        },
        {
          name: 'Tools',
          skills: [
            {
              name: 'Git',
              image: 'git.png'
            },
            {
              name: 'GitHub',
              image: 'github.png'
            },
            {
              name: 'GitLab',
              image: 'gitlab.png'
            },
            {
              name: 'Vim',
              image: 'vim.png'
            },
            {
              name: 'Neovim',
              image: 'neovim.png'
            },
            {
              name: 'TravisCI',
              image: 'travisci.png'
            },
            {
              name: 'Jenkins',
              image: 'jenkins.png'
            }
          ]
        }
      ]
    }
  },
  methods: {
  }
}
</script>

<style>
.name {
  padding: 5px;
}
</style>
