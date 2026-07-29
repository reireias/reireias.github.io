<template>
  <v-container class="index-page">
    <v-row v-show="step1" justify="center">
      <v-col class="contents-container">
        <div class="main-contents avatar-container">
          <v-avatar size="140" class="icon-avatar">
            <img src="/icon.png" alt="icon" />
          </v-avatar>
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
import anime from 'animejs'
import { logo } from '~/constants/svg'

const useVuetify = () => {
  const instance = getCurrentInstance()
  return instance!.proxy.$vuetify
}

export default defineComponent({
  layout: 'gridless',
  setup() {
    const step1 = ref(true)
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
      anime({
        targets: '.icon-avatar',
        scale: [0.3, 1],
        opacity: [0, 1],
        easing: 'easeOutBack',
        duration: 300,
        complete: () => {
          step1.value = false
          step3.value = true
          runStep3()
        },
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
        duration: 300,
        delay: (_: any, i: number) => i * 30,
      })
      timeline.add(
        {
          easing: 'easeInOutSine',
          fill: ['transparent', (_: any, i: number) => colors[i]],
          duration: 200,
        },
        '-=100'
      )
    }
    onMounted(() => {
      runStep1()
    })

    return {
      step1,
      step3,
      logo,
      colors,
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
