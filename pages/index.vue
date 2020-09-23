<template>
  <v-container>
    <v-row justify="center">
      <v-col style="display: contents">
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

export default defineComponent({
  layout: 'new',
  setup() {
    console.log(anime)
    const show = ref(false)
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
      show.value = true
      const timeline = anime.timeline({
        targets: ['.debug-svg path'],
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
      run()
    })

    return {
      show,
      logo,
      colors,
      run,
    }
  },
})
</script>
