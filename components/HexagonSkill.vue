<template>
  <div>
    <div class="title-text display-4 font-weight-thin">
      Skills
    </div>
    <transition name="fade">
      <div v-show="loaded" class="body">
        <ul id="hexGrid">
          <li v-for="skill in skills" :key="skill.name" class="hex">
            <div class="hexIn">
              <a class="hexLink" href="#">
                <img :src="skill.image" alt="" />
                <h1>{{ skill.name }}</h1>
                <p><br /></p>
              </a>
            </div>
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loaded: false,
      sorters: ['category', 'name'],
      sort: 'category',
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
  mounted() {
    this.loaded = true
  },
  methods: {
    sortChange() {
      this.skills.sort((a, b) => {
        switch (this.sort) {
          case 'name':
            return a.name.localeCompare(b.name)
          case 'category':
            return a.id - b.id
        }
      })
    }
  }
}
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
* {
  margin: 0;
  padding: 0;
}
body {
  background: rgb(123, 158, 158);
}
#hexGrid {
  display: flex;
  flex-wrap: wrap;
  width: 90%;
  margin: 0 auto;
  overflow: hidden;
  font-family: 'Raleway', sans-serif;
  font-size: 15px;
  list-style-type: none;
}

.hex {
  position: relative;
  visibility: hidden;
  outline: 1px solid transparent; /* fix for jagged edges in FF on hover transition */
}
.hex::after {
  content: '';
  display: block;
  padding-bottom: 86.602%; /* =  100 / tan(60) * 1.5 */
}
.hexIn {
  position: absolute;
  width: 96%;
  padding-bottom: 110.851%; /* =  width / sin(60) */
  margin: 0 2%;
  overflow: hidden;
  visibility: hidden;
  outline: 1px solid transparent; /* fix for jagged edges in FF on hover transition */
  -webkit-transform: rotate3d(0, 0, 1, -60deg) skewY(30deg);
  -ms-transform: rotate3d(0, 0, 1, -60deg) skewY(30deg);
  transform: rotate3d(0, 0, 1, -60deg) skewY(30deg);
}
.hexIn * {
  position: absolute;
  visibility: visible;
  outline: 1px solid transparent; /* fix for jagged edges in FF on hover transition */
}
.hexLink {
  display: block;
  width: 100%;
  height: 100%;
  text-align: center;
  color: #fff;
  overflow: hidden;
  -webkit-transform: skewY(-30deg) rotate3d(0, 0, 1, 60deg);
  -ms-transform: skewY(-30deg) rotate3d(0, 0, 1, 60deg);
  transform: skewY(-30deg) rotate3d(0, 0, 1, 60deg);
}

/*** HEX CONTENT **********************************************************************/
.hex img {
  background-color: #fff;
  left: -100%;
  right: -100%;
  width: auto;
  height: 100%;
  margin: 0 auto;
  padding: 20%;
  -webkit-transform: rotate3d(0, 0, 0, 0deg);
  -ms-transform: rotate3d(0, 0, 0, 0deg);
  transform: rotate3d(0, 0, 0, 0deg);
}

.hex h1,
.hex p {
  width: 100%;
  padding: 5%;
  box-sizing: border-box;
  background-color: rgba(0, 128, 128, 0.8);
  font-weight: 300;
  -webkit-transition: -webkit-transform 0.2s ease-out, opacity 0.3s ease-out;
  transition: transform 0.2s ease-out, opacity 0.3s ease-out;
}
.hex h1 {
  bottom: 50%;
  padding-top: 50%;
  font-size: 1.5em;
  z-index: 1;
  -webkit-transform: translate3d(0, -100%, 0);
  -ms-transform: translate3d(0, -100%, 0);
  transform: translate3d(0, -100%, 0);
}
.hex h1::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 45%;
  width: 10%;
  text-align: center;
  border-bottom: 1px solid #fff;
}
.hex p {
  top: 50%;
  padding-bottom: 50%;
  -webkit-transform: translate3d(0, 100%, 0);
  -ms-transform: translate3d(0, 100%, 0);
  transform: translate3d(0, 100%, 0);
}

/*** HOVER EFFECT  **********************************************************************/
.hexLink:hover h1,
.hexLink:focus h1,
.hexLink:hover p,
.hexLink:focus p {
  -webkit-transform: translate3d(0, 0, 0);
  -ms-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
}

/*** HEXAGON SIZING AND EVEN ROW INDENTATION *****************************************************************/
@media (min-width: 1201px) {
  /* <- 5-4  hexagons per row */
  #hexGrid {
    padding-bottom: 4.4%;
  }
  .hex {
    width: 10%; /* = 100 / 5 */
  }
  .hex:nth-child(19n + 11) {
    /* first hexagon of even rows */
    margin-left: 5%; /* = width of .hex / 2  to indent even rows */
  }
}

@media (max-width: 1200px) and (min-width: 901px) {
  /* <- 4-3  hexagons per row */
  #hexGrid {
    padding-bottom: 5.5%;
  }
  .hex {
    width: 25%; /* = 100 / 4 */
  }
  .hex:nth-child(7n + 5) {
    /* first hexagon of even rows */
    margin-left: 12.5%; /* = width of .hex / 2  to indent even rows */
  }
}

@media (max-width: 900px) and (min-width: 601px) {
  /* <- 3-2  hexagons per row */
  #hexGrid {
    padding-bottom: 7.4%;
  }
  .hex {
    width: 33.333%; /* = 100 / 3 */
  }
  .hex:nth-child(5n + 4) {
    /* first hexagon of even rows */
    margin-left: 16.666%; /* = width of .hex / 2  to indent even rows */
  }
}

@media (max-width: 600px) {
  /* <- 2-1  hexagons per row */
  #hexGrid {
    padding-bottom: 11.2%;
  }
  .hex {
    width: 50%; /* = 100 / 3 */
  }
  .hex:nth-child(3n + 3) {
    /* first hexagon of even rows */
    margin-left: 25%; /* = width of .hex / 2  to indent even rows */
  }
}

@media (max-width: 400px) {
  #hexGrid {
    font-size: 13px;
  }
}
</style>
