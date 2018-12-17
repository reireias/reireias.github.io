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
        <v-card @click="click(skill)">
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
              name: 'Java',
              image: 'java.png'
            },
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
            }
          ]
        },
        {
          name: 'Middleware',
          skills: [
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
          name: 'Infrastructure',
          skills: [
          ]
        },
        {
          name: 'Linux',
          skills: [
          ]
        },
        {
          name: 'Monitoring',
          skills: [
          ]
        },
        {
          name: 'Tools',
          skills: [
            {
              name: 'TravisCI',
              image: 'travisci.png'
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
