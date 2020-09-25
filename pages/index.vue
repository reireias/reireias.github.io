<template>
  <v-container class="index-page">
    <v-row v-show="step1" justify="center">
      <v-col class="contents-container">
        <div id="grid" class="grid main-contents">
          <div
            v-for="i in new Array(324)"
            :key="i"
            :class="randomSquareClass()"
          ></div>
        </div>
      </v-col>
    </v-row>
    <v-row v-show="step2" justify="center">
      <v-col class="contents-container">
        <svg
          class="svg main-contents"
          width="400"
          height="400"
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

<script lang="ts">
import {
  defineComponent,
  ref,
  getCurrentInstance,
  onMounted,
} from '@vue/composition-api'
import { logo } from '~/constants/svg'
const anime = require('animejs').default

const useVuetify = () => {
  const vm = getCurrentInstance()
  return vm!.$vuetify
}

const COLOR_CLASSES = [
  'v-green',
  'v-cyan',
  'v-red',
  'v-orange',
  'v-purple',
  'v-yellow',
]

export default defineComponent({
  layout: 'gridless',
  setup() {
    const step1 = ref(true)
    const step2 = ref(false)
    const vuetify = useVuetify()
    const colors = [
      vuetify.theme.themes.dark.primary,
      vuetify.theme.themes.dark.info,
      vuetify.theme.themes.dark.warning,
      vuetify.theme.themes.dark.primary,
      vuetify.theme.themes.dark.info,
      vuetify.theme.themes.dark.warning,
      vuetify.theme.themes.dark.accent,
      vuetify.theme.themes.dark.accent,
    ]
    const run = () => {
      const timeline = anime.timeline({
        targets: ['.svg path'],
      })
      timeline.add({
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutSine',
        duration: 500,
        delay: (_: any, i: number) => i * 200 + 500,
      })
      timeline.add(
        {
          easing: 'easeInOutSine',
          fill: ['transparent', (_: any, i: number) => colors[i]],
          duration: 500,
        },
        '-=200'
      )
    }
    onMounted(() => {
      const timeline = anime.timeline({
        targets: '#grid .el',
        complete: () => {
          step1.value = false
          step2.value = true
          run()
        },
      })
      timeline.add({
        scale: 0,
        easing: 'linear',
        duration: 1,
      })
      timeline.add({
        scale: [
          // { value: 0.1, easing: 'easeOutSine', duration: 500 },
          { value: 1, easing: 'easeInQuad', duration: 1200 },
        ],
        opacity: [{ value: 1, easing: 'linear', duration: 1 }],
        delay: anime.stagger(200, { grid: [18, 18], from: 'center' }),
      })
      timeline.add({
        backgroundColor: vuetify.theme.themes.dark.primary,
        delay: anime.stagger(80, { grid: [18, 18], from: 'center' }),
      })
      timeline.add({
        backgroundColor: vuetify.theme.themes.dark.secondary,
        delay: anime.stagger(80, { grid: [18, 18], from: 'first' }),
      })
      timeline.add({
        backgroundColor: vuetify.theme.themes.dark.error,
        delay: anime.stagger(80, { grid: [18, 18], from: 'last' }),
      })
      timeline.add({
        scale: 0,
        easing: 'linear',
        duration: 300,
        delay: () => anime.random(0, 2000),
      })
    })
    const randomSquareClass = () => {
      const color =
        COLOR_CLASSES[Math.floor(Math.random() * COLOR_CLASSES.length)]
      return `square small el ${color}`
    }

    return {
      step1,
      step2,
      logo,
      colors,
      run,
      randomSquareClass,
    }
  },
})
</script>

<style lang="scss">
.index-page {
  height: 100%;

  .row {
    height: 100%;
  }

  .square {
    pointer-events: none;
    width: 28px;
    height: 28px;
    margin: 1px;
    font-size: 12px;
    background-color: white;
    opacity: 0;
  }
  .v-green {
    background-color: var(--v-primary-base);
  }
  .v-cyan {
    background-color: var(--v-secondary-base);
  }
  .v-red {
    background-color: var(--v-error-base);
  }
  .v-orange {
    background-color: var(--v-warning-base);
  }
  .v-purple {
    background-color: var(--v-accent-base);
  }
  .v-yellow {
    background-color: var(--v-info-base);
  }
  .small {
    width: 18px;
    height: 18px;
  }
  .grid {
    margin: 10px;
    display: flex;
    flex-wrap: wrap;
    width: 360px;
  }
  .contents-container {
    display: contents;
  }
  .main-contents {
    margin: auto;
  }
}
</style>
