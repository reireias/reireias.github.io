<template>
  <v-container grid-list-md>
    <v-layout justify-center>
      <v-flex xs7 sm5 md3>
        <v-radio-group v-model="sort" row>
          <v-radio
            v-for="sorter in sorters"
            :key="sorter"
            :label="sorter"
            :value="sorter"
            color="purple accent-3"
            @change="sortChange(sorter)"
          />
        </v-radio-group>
      </v-flex>
    </v-layout>
    <transition-group name="cards" tag="div" class="layout row wrap">
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
    </transition-group>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      sorters: ["category", "name"],
      sort: "category",
      skills: [
        {
          id: 1,
          category: 'Front End',
          name: 'Node.js',
          image: 'nodejs.png'
        },
        {
          id: 2,
          category: 'Front End',
          name: 'Vue.js',
          image: 'vuejs.png'
        },
        {
          id: 3,
          category: 'Front End',
          name: 'Nuxt.js',
          image: 'nuxt.png'
        },
        {
          id: 4,
          category: 'Front End',
          name: 'Vuetify.js',
          image: 'vuetifyjs.png'
        },
        {
          id: 5,
          category: 'Front End',
          name: 'Riot.js',
          image: 'riot.png'
        },
        {
          id: 6,
          category: 'Front End',
          name: 'ESLint',
          image: 'eslint.png'
        },
        {
          id: 7,
          category: 'Front End',
          name: 'Prettier',
          image: 'prettier.png'
        },
        {
          id: 8,
          category: 'Front End',
          name: 'Babel',
          image: 'babel.png'
        },
        {
          id: 9,
          category: 'Front End',
          name: 'webpack',
          image: 'webpack.png'
        },
        {
          id: 10,
          category: 'Server Side',
          name: 'Go',
          image: 'golang.png'
        },
        {
          id: 11,
          category: 'Server Side',
          name: 'Python',
          image: 'python.png'
        },
        {
          id: 12,
          category: 'Server Side',
          name: 'C#',
          image: 'csharp.png'
        },
        {
          id: 13,
          category: 'Server Side',
          name: 'Java',
          image: 'java.png'
        },
        {
          id: 14,
          category: 'Server Side',
          name: 'SpringBoot',
          image: 'spring.png'
        },
        {
          id: 15,
          category: 'Server Side',
          name: 'PostgreSQL',
          image: 'postgresql.png'
        },
        {
          id: 16,
          category: 'Server Side',
          name: 'SQLite',
          image: 'sqlite.png'
        },
        {
          id: 17,
          category: 'Infrastructure',
          name: 'AWS',
          image: 'aws.png'
        },
        {
          id: 18,
          category: 'Infrastructure',
          name: 'GCP',
          image: 'gcp.png'
        },
        {
          id: 19,
          category: 'Infrastructure',
          name: 'Firebase',
          image: 'firebase.png'
        },
        {
          id: 20,
          category: 'Infrastructure',
          name: 'Docker',
          image: 'docker.png'
        },
        {
          id: 21,
          category: 'Infrastructure',
          name: 'VMWare',
          image: 'vmware.png'
        },
        {
          id: 22,
          category: 'Infrastructure',
          name: 'Ansible',
          image: 'ansible.png'
        },
        {
          id: 23,
          category: 'Infrastructure',
          name: 'Nginx',
          image: 'nginx.png'
        },
        {
          id: 24,
          category: 'Infrastructure',
          name: 'Tomcat',
          image: 'tomcat.png'
        },
        {
          id: 25,
          category: 'Linux',
          name: 'RHEL',
          image: 'redhat.png'
        },
        {
          id: 26,
          category: 'Linux',
          name: 'CentOS',
          image: 'centos.png'
        },
        {
          id: 27,
          category: 'Linux',
          name: 'Linux Mint',
          image: 'linuxmint.png'
        },
        {
          id: 28,
          category: 'Linux',
          name: 'Ubuntu',
          image: 'ubuntu.png'
        },
        {
          id: 29,
          category: 'Monitoring',
          name: 'Prometheus',
          image: 'prometheus.png'
        },
        {
          id: 30,
          category: 'Monitoring',
          name: 'cAdvisor',
          image: 'cadvisor.png'
        },
        {
          id: 31,
          category: 'Monitoring',
          name: 'Grafana',
          image: 'grafana.png'
        },
        {
          id: 32,
          category: 'Monitoring',
          name: 'Elasticsearch',
          image: 'elasticsearch.png'
        },
        {
          id: 33,
          category: 'Monitoring',
          name: 'Logstash',
          image: 'logstash.png'
        },
        {
          id: 34,
          category: 'Monitoring',
          name: 'Kibana',
          image: 'kibana.png'
        },
        {
          id: 35,
          category: 'Tools',
          name: 'Git',
          image: 'git.png'
        },
        {
          id: 36,
          category: 'Tools',
          name: 'GitHub',
          image: 'github.png'
        },
        {
          id: 37,
          category: 'Tools',
          name: 'GitLab',
          image: 'gitlab.png'
        },
        {
          id: 38,
          category: 'Tools',
          name: 'Vim',
          image: 'vim.png'
        },
        {
          id: 39,
          category: 'Tools',
          name: 'Neovim',
          image: 'neovim.png'
        },
        {
          id: 40,
          category: 'Tools',
          name: 'TravisCI',
          image: 'travisci.png'
        },
        {
          id: 41,
          category: 'Tools',
          name: 'Jenkins',
          image: 'jenkins.png'
        }
      ]
    }
  },
  methods: {
    sortChange(sorter) {
      this.skills.sort((a, b) => {
        switch (sorter) {
          case "name":
            return a.name.localeCompare(b.name)
          case "category":
            return a.id - b.id
        }
      })
    }
  }
}
</script>

<style>
.name {
  padding: 5px;
}
.cards-move {
  transition: transform 1s;
}
</style>
