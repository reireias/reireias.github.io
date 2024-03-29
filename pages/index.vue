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
      <v-col id="step2" class="contents-container">
        <div class="main-contents">
          <div id="el1" class="circle small el follow-path v-red"></div>
          <div id="el2" class="circle small el follow-path v-green"></div>
          <div id="el3" class="circle small el follow-path v-cyan"></div>
          <svg
            class="svg main-contents"
            width="400"
            height="400"
            viewBox="-60 -60 120 120"
          >
            <!-- 円x3 -->
            <path
              id="step2Path1"
              fill="none"
              stroke="currentColor"
              stroke-width="0"
              d="M0,-50 A50,50 0,1,0 0,50 A50,50 0,1,0 0,-50"
            ></path>
            <path
              id="step2Path2"
              fill="none"
              stroke="currentColor"
              stroke-width="0"
              d="M43.3,25 A50,50 0,1,0 -43.3,-25 A50,50 0,1,0 43.3,25"
            ></path>
            <path
              id="step2Path3"
              fill="none"
              stroke="currentColor"
              stroke-width="0"
              d="M-43.3,25 A50,50 0,1,0 43.3,-25 A50,50 0,1,0 -43.3,25"
            ></path>
            <!-- 楕円x3 -->
            <path
              id="step2Path4"
              fill="none"
              stroke="currentColor"
              stroke-width="0"
              d="M0,-50 A20,50 0,1,0 0,50 A20,50 0,1,0 0,-50"
            ></path>
            <path
              id="step2Path5"
              fill="none"
              stroke="currentColor"
              stroke-width="0"
              d="M43.3,25 A50,20 30,1,0 -43.3,-25 A50,20 30,1,0 43.3,25"
            ></path>
            <path
              id="step2Path6"
              fill="none"
              stroke="currentColor"
              stroke-width="0"
              d="M-43.3,25 A50,20 -30,1,0 43.3,-25 A50,20 -30,1,0 -43.3,25"
            ></path>
          </svg>
        </div>
      </v-col>
    </v-row>
    <v-row v-show="step3" justify="center">
      <v-col id="step3" class="contents-container">
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
  const instance = getCurrentInstance()
  return instance!.proxy.$vuetify
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
    const step3 = ref(false)
    const vuetify = useVuetify()
    const colors = [
      vuetify.theme.themes.dark.primary,
      vuetify.theme.themes.dark.primary,
      vuetify.theme.themes.dark.primary,
      vuetify.theme.themes.dark.primary,
      vuetify.theme.themes.dark.primary,
      vuetify.theme.themes.dark.primary,
      vuetify.theme.themes.dark.error,
      vuetify.theme.themes.dark.error,
    ]
    const runStep1 = () => {
      const timeline = anime.timeline({
        targets: '#grid .el',
        complete: () => {
          step1.value = false
          step3.value = true
          runStep3()
        },
      })
      timeline.add({
        scale: 0,
        easing: 'linear',
        duration: 1,
      })
      timeline.add({
        scale: [{ value: 1, easing: 'easeInQuad', duration: 600 }],
        opacity: [{ value: 1, easing: 'linear', duration: 1 }],
        delay: anime.stagger(100, { grid: [18, 18], from: 'center' }),
      })
      timeline.add({
        backgroundColor: vuetify.theme.themes.dark.error,
        delay: anime.stagger(20, { grid: [18, 18], from: 'last' }),
      })
      timeline.add({
        scale: 0,
        easing: 'linear',
        duration: 300,
        delay: () => anime.random(0, 1000),
      })
    }
    const runStep3 = () => {
      step3.value = true
      const timeline = anime.timeline({
        targets: '#step3 path',
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
      runStep1()
    })
    const randomSquareClass = () => {
      const color =
        COLOR_CLASSES[Math.floor(Math.random() * COLOR_CLASSES.length)]
      return `square small el ${color}`
    }

    return {
      step1,
      step2,
      step3,
      logo,
      colors,
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
  .circle {
    pointer-events: none;
    width: 28px;
    height: 28px;
    margin: 1px;
    font-size: 12px;
    border-radius: 50%;
    transform: scale(0);
  }
  .small {
    width: 18px;
    height: 18px;
  }
  .follow-path {
    position: absolute;
    margin-top: -9px;
    margin-left: -9px;
  }
}
</style>
