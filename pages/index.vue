<template>
  <v-container>
    <v-row justify="center">
      <v-col style="display: contents;">
        <svg
          v-show="show"
          class="debug-svg"
          width="400"
          height="680"
          viewBox="-1 0 384 67.701"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g
            id="svgGroup"
            stroke-linecap="round"
            fill-rule="evenodd"
            font-size="9pt"
            stroke-width="0.25mm"
            fill="none"
          >
            <path
              v-for="(data, index) in logo"
              :key="data"
              :d="data"
              :stroke="colors[index]"
            />
          </g>
        </svg>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { logo } from '~/constants/svg'
const anime = require('animejs').default

export default {
  data() {
    return {
      show: false,
      logo,
      colors: [
        this.$vuetify.theme.themes.dark.primary,
        this.$vuetify.theme.themes.dark.info,
        this.$vuetify.theme.themes.dark.warning,
        this.$vuetify.theme.themes.dark.primary,
        this.$vuetify.theme.themes.dark.info,
        this.$vuetify.theme.themes.dark.warning,
        this.$vuetify.theme.themes.dark.accent,
        this.$vuetify.theme.themes.dark.accent,
      ],
    }
  },
  mounted() {
    this.run()
  },
  methods: {
    run() {
      this.show = true
      anime({
        targets: '.debug',
        translateX: 250,
      })
      const timeline = anime.timeline({
        targets: ['.debug-svg path'],
      })
      timeline.add({
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutSine',
        duration: 500,
        delay: (_, i) => i * 200 + 500,
      })
      timeline.add(
        {
          easing: 'easeInOutSine',
          fill: ['transparent', (_, i) => this.colors[i]],
          duration: 500,
        },
        '-=200'
      )
    },
  },
}
</script>

<style lang="scss">
.debug {
  width: 100px;
  height: 100px;
  background-color: var(--v-primary-base);
}
</style>
