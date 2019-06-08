<template>
  <div class="body">
    <ul id="hexGrid">
      <li v-for="skill in skills" :key="skill.name" class="hex">
        <div class="hexIn">
          <a class="hexLink" href="javascript:void(0)">
            <picture>
              <source type="image/webp" :srcset="`${skill.image}.webp`" />
              <img :src="`${skill.image}.png`" :alt="skill.name" />
            </picture>
            <h1>{{ skill.name }}</h1>
            <p><br /></p>
          </a>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sorters: ['category', 'name'],
      sort: 'category',
      skills: [
        {
          id: 1,
          category: 'Front End',
          name: 'Node.js',
          image: 'nodejs'
        },
        {
          id: 2,
          category: 'Front End',
          name: 'Vue.js',
          image: 'vuejs'
        },
        {
          id: 3,
          category: 'Front End',
          name: 'Nuxt.js',
          image: 'nuxt'
        },
        {
          id: 4,
          category: 'Front End',
          name: 'Vuetify.js',
          image: 'vuetifyjs'
        },
        {
          id: 5,
          category: 'Front End',
          name: 'Riot.js',
          image: 'riot'
        },
        {
          id: 6,
          category: 'Front End',
          name: 'ESLint',
          image: 'eslint'
        },
        {
          id: 7,
          category: 'Front End',
          name: 'Prettier',
          image: 'prettier'
        },
        {
          id: 8,
          category: 'Front End',
          name: 'Babel',
          image: 'babel'
        },
        {
          id: 9,
          category: 'Front End',
          name: 'webpack',
          image: 'webpack'
        },
        {
          id: 10,
          category: 'Server Side',
          name: 'Go',
          image: 'golang'
        },
        {
          id: 11,
          category: 'Server Side',
          name: 'Python',
          image: 'python'
        },
        {
          id: 12,
          category: 'Server Side',
          name: 'C#',
          image: 'csharp'
        },
        {
          id: 13,
          category: 'Server Side',
          name: 'Java',
          image: 'java'
        },
        {
          id: 14,
          category: 'Server Side',
          name: 'SpringBoot',
          image: 'spring'
        },
        {
          id: 15,
          category: 'Server Side',
          name: 'PostgreSQL',
          image: 'postgresql'
        },
        {
          id: 16,
          category: 'Server Side',
          name: 'SQLite',
          image: 'sqlite'
        },
        {
          id: 17,
          category: 'Infrastructure',
          name: 'AWS',
          image: 'aws'
        },
        {
          id: 18,
          category: 'Infrastructure',
          name: 'GCP',
          image: 'gcp'
        },
        {
          id: 19,
          category: 'Infrastructure',
          name: 'Firebase',
          image: 'firebase'
        },
        {
          id: 20,
          category: 'Infrastructure',
          name: 'Docker',
          image: 'docker'
        },
        {
          id: 21,
          category: 'Infrastructure',
          name: 'VMWare',
          image: 'vmware'
        },
        {
          id: 22,
          category: 'Infrastructure',
          name: 'Ansible',
          image: 'ansible'
        },
        {
          id: 23,
          category: 'Infrastructure',
          name: 'Nginx',
          image: 'nginx'
        },
        {
          id: 24,
          category: 'Infrastructure',
          name: 'Tomcat',
          image: 'tomcat'
        },
        {
          id: 25,
          category: 'Linux',
          name: 'RHEL',
          image: 'redhat'
        },
        {
          id: 26,
          category: 'Linux',
          name: 'CentOS',
          image: 'centos'
        },
        {
          id: 27,
          category: 'Linux',
          name: 'Linux Mint',
          image: 'linuxmint'
        },
        {
          id: 28,
          category: 'Linux',
          name: 'Ubuntu',
          image: 'ubuntu'
        },
        {
          id: 29,
          category: 'Monitoring',
          name: 'Prometheus',
          image: 'prometheus'
        },
        {
          id: 30,
          category: 'Monitoring',
          name: 'cAdvisor',
          image: 'cadvisor'
        },
        {
          id: 31,
          category: 'Monitoring',
          name: 'Grafana',
          image: 'grafana'
        },
        {
          id: 32,
          category: 'Monitoring',
          name: 'Elasticsearch',
          image: 'elasticsearch'
        },
        {
          id: 33,
          category: 'Monitoring',
          name: 'Logstash',
          image: 'logstash'
        },
        {
          id: 34,
          category: 'Monitoring',
          name: 'Kibana',
          image: 'kibana'
        },
        {
          id: 35,
          category: 'Tools',
          name: 'Git',
          image: 'git'
        },
        {
          id: 36,
          category: 'Tools',
          name: 'GitHub',
          image: 'github'
        },
        {
          id: 37,
          category: 'Tools',
          name: 'GitLab',
          image: 'gitlab'
        },
        {
          id: 38,
          category: 'Tools',
          name: 'Vim',
          image: 'vim'
        },
        {
          id: 39,
          category: 'Tools',
          name: 'Neovim',
          image: 'neovim'
        },
        {
          id: 40,
          category: 'Tools',
          name: 'TravisCI',
          image: 'travisci'
        },
        {
          id: 41,
          category: 'Tools',
          name: 'Jenkins',
          image: 'jenkins'
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
#hexGrid {
  display: flex;
  flex-wrap: wrap;
  width: 90%;
  margin: 0 auto;
  overflow: hidden;
  font-family: 'Raleway', sans-serif;
  font-size: 15px;
  list-style-type: none;
  padding-left: 0px;
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
  color: #fff;
  overflow: hidden;
  -webkit-transform: skewY(-30deg) rotate3d(0, 0, 1, 60deg);
  -ms-transform: skewY(-30deg) rotate3d(0, 0, 1, 60deg);
  transform: skewY(-30deg) rotate3d(0, 0, 1, 60deg);
}

/*** HEX CONTENT **********************************************************************/
.hex picture {
  width: 100%;
  height: 100%;
}

.hex img {
  background-color: #f1f8e9;
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

.hex source {
  background-color: #f1f8e9;
  left: -50%;
  right: -50%;
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
  text-align: center;
  width: 100%;
  padding: 5%;
  box-sizing: border-box;
  background-color: rgba(51, 150, 30, 0.8);
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
.hexLink:hover p {
  -webkit-transform: translate3d(0, 0, 0);
  -ms-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
}

/*** HEXAGON SIZING AND EVEN ROW INDENTATION *****************************************************************/
@media (min-width: 1201px) {
  /* <- 10-9  hexagons per row */
  #hexGrid {
    padding-bottom: 4.4%;
  }
  .hex {
    width: 10%; /* = 100 / 10 */
  }
  .hex:nth-child(19n + 11) {
    /* first hexagon of even rows */
    margin-left: 5%; /* = width of .hex / 2  to indent even rows */
  }
}

@media (max-width: 1200px) and (min-width: 901px) {
  /* <- 8-7  hexagons per row */
  #hexGrid {
    padding-bottom: 5.5%;
  }
  .hex {
    width: 12.5%; /* = 100 / 8 */
  }
  .hex:nth-child(15n + 9) {
    /* first hexagon of even rows */
    margin-left: 6.25%; /* = width of .hex / 2  to indent even rows */
  }
}

@media (max-width: 900px) and (min-width: 601px) {
  /* <- 6-5  hexagons per row */
  #hexGrid {
    padding-bottom: 7.4%;
  }
  .hex {
    width: 16.666%; /* = 100 / 6 */
  }
  .hex:nth-child(11n + 7) {
    /* first hexagon of even rows */
    margin-left: 8.333%; /* = width of .hex / 2  to indent even rows */
  }
}

@media (max-width: 600px) {
  /* <- 4-3  hexagons per row */
  #hexGrid {
    padding-bottom: 11.2%;
  }
  .hex {
    width: 25%; /* = 100 / 4 */
  }
  .hex:nth-child(7n + 5) {
    /* first hexagon of even rows */
    margin-left: 12.5%; /* = width of .hex / 2  to indent even rows */
  }
}

@media (max-width: 400px) {
  #hexGrid {
    font-size: 13px;
  }
}
</style>
