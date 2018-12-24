<template>
  <v-container grid-list-md>
    <v-layout
      row
      wrap
    >
      <v-flex
        v-for="skill in skills"
        :key="skill.name"
        class="skill"
        xs4
        sm3
        md2
        text-xs-center
      >
        <v-card>
          <center>
            <v-img
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
      skills: [
        {
          category: 'Front End',
          name: 'Node.js',
          image: 'nodejs.png'
        },
        {
          category: 'Front End',
          name: 'Vue.js',
          image: 'vuejs.png'
        },
        {
          category: 'Front End',
          name: 'Nuxt.js',
          image: 'nuxt.png'
        },
        {
          category: 'Front End',
          name: 'Vuetify.js',
          image: 'vuetifyjs.png'
        },
        {
          category: 'Front End',
          name: 'Riot.js',
          image: 'riot.png'
        },
        {
          category: 'Front End',
          name: 'ESLint',
          image: 'eslint.png'
        },
        {
          category: 'Front End',
          name: 'Prettier',
          image: 'prettier.png'
        },
        {
          category: 'Front End',
          name: 'Babel',
          image: 'babel.png'
        },
        {
          category: 'Front End',
          name: 'webpack',
          image: 'webpack.png'
        },
        {
          category: 'Server Side',
          name: 'Go',
          image: 'golang.png'
        },
        {
          category: 'Server Side',
          name: 'Python',
          image: 'python.png'
        },
        {
          category: 'Server Side',
          name: 'C#',
          image: 'csharp.png'
        },
        {
          category: 'Server Side',
          name: 'Java',
          image: 'java.png'
        },
        {
          category: 'Server Side',
          name: 'SpringBoot',
          image: 'spring.png'
        },
        {
          category: 'Server Side',
          name: 'PostgreSQL',
          image: 'postgresql.png'
        },
        {
          category: 'Server Side',
          name: 'SQLite',
          image: 'sqlite.png'
        },
        {
          category: 'Infrastructure',
          name: 'AWS',
          image: 'aws.png'
        },
        {
          category: 'Infrastructure',
          name: 'GCP',
          image: 'gcp.png'
        },
        {
          category: 'Infrastructure',
          name: 'Firebase',
          image: 'firebase.png'
        },
        {
          category: 'Infrastructure',
          name: 'Docker',
          image: 'docker.png'
        },
        {
          category: 'Infrastructure',
          name: 'VMWare',
          image: 'vmware.png'
        },
        {
          category: 'Infrastructure',
          name: 'Ansible',
          image: 'ansible.png'
        },
        {
          category: 'Infrastructure',
          name: 'Nginx',
          image: 'nginx.png'
        },
        {
          category: 'Infrastructure',
          name: 'Tomcat',
          image: 'tomcat.png'
        },
        {
          category: 'Linux',
          name: 'RHEL',
          image: 'redhat.png'
        },
        {
          category: 'Linux',
          name: 'CentOS',
          image: 'centos.png'
        },
        {
          category: 'Linux',
          name: 'Linux Mint',
          image: 'linuxmint.png'
        },
        {
          category: 'Linux',
          name: 'Ubuntu',
          image: 'ubuntu.png'
        },
        {
          category: 'Monitoring',
          name: 'Prometheus',
          image: 'prometheus.png'
        },
        {
          category: 'Monitoring',
          name: 'cAdvisor',
          image: 'cadvisor.png'
        },
        {
          category: 'Monitoring',
          name: 'Grafana',
          image: 'grafana.png'
        },
        {
          category: 'Monitoring',
          name: 'Elasticsearch',
          image: 'elasticsearch.png'
        },
        {
          category: 'Monitoring',
          name: 'Logstash',
          image: 'logstash.png'
        },
        {
          category: 'Monitoring',
          name: 'Kibana',
          image: 'kibana.png'
        },
        {
          category: 'Tools',
          name: 'Git',
          image: 'git.png'
        },
        {
          category: 'Tools',
          name: 'GitHub',
          image: 'github.png'
        },
        {
          category: 'Tools',
          name: 'GitLab',
          image: 'gitlab.png'
        },
        {
          category: 'Tools',
          name: 'Vim',
          image: 'vim.png'
        },
        {
          category: 'Tools',
          name: 'Neovim',
          image: 'neovim.png'
        },
        {
          category: 'Tools',
          name: 'TravisCI',
          image: 'travisci.png'
        },
        {
          category: 'Tools',
          name: 'Jenkins',
          image: 'jenkins.png'
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
