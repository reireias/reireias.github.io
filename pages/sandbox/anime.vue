<template>
  <v-container class="anime-page">
    <page-title title="Anime"></page-title>

    <v-row justify="center">
      <v-col cols="6">
        <v-row justify="center">
          <div class="display-1">Motion Path</div>
        </v-row>
        <v-row justify="center">
          <div id="anime1">
            <div class="circle small el follow-path"></div>
            <svg id="svg" width="200" height="200" viewBox="-10 -60 120 120">
              <path
                fill="none"
                stroke="currentColor"
                stroke-width="1"
                d="M0,0 A50,50 0,1,0 100,0 A50,50 0,1,0 0,0"
              ></path>
            </svg>
          </div>
        </v-row>
        <v-row justify="center">
          <v-btn outlined @click="startAnime1">start</v-btn>
        </v-row>
      </v-col>

      <v-col cols="6">
        <v-row justify="center">
          <div class="display-1">Multi Motion Path</div>
        </v-row>
        <v-row justify="center">
          <div id="anime2">
            <div class="circle small el1 follow-path"></div>
            <div class="circle small el2 follow-path orange"></div>
            <div class="circle small el3 follow-path purple"></div>
            <svg id="svg" width="200" height="200" viewBox="-60 -60 120 120">
              <path
                class="path1"
                fill="none"
                stroke="currentColor"
                stroke-width="1"
                d="M-18,0 A2,5 0,1,0 18,0 A2,5 0,1,0 -18,0"
              ></path>
              <path
                class="path2"
                fill="none"
                stroke="currentColor"
                stroke-width="1"
                d="M-30,0 A5,2 30,1,0 30,0 A5,2 30,1,0 -30,0"
              ></path>
              <path
                class="path3"
                fill="none"
                stroke="currentColor"
                stroke-width="1"
                d="M-30,0 A5,2 -30,1,0 30,0 A5,2 -30,1,0 -30,0"
              ></path>
            </svg>
          </div>
        </v-row>
        <v-row justify="center">
          <v-btn outlined @click="startAnime2">start</v-btn>
        </v-row>
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-col cols="6">
        <v-row justify="center">
          <div class="display-1">Delay Motion Path</div>
        </v-row>
        <v-row justify="center">
          <div id="anime3">
            <div class="circle small el1 follow-path"></div>
            <div class="circle small el2 follow-path orange"></div>
            <div class="circle small el3 follow-path purple"></div>
            <svg id="svg" width="200" height="200" viewBox="-10 -60 120 120">
              <path
                fill="none"
                stroke="currentColor"
                stroke-width="1"
                d="M0,0 A50,50 0,1,0 100,0 A50,50 0,1,0 0,0"
              ></path>
            </svg>
          </div>
        </v-row>
        <v-row justify="center">
          <v-btn outlined @click="startAnime3">start</v-btn>
        </v-row>
      </v-col>
      <v-col cols="6">
        <v-row justify="center">
          <div class="display-1">Spiral</div>
        </v-row>
        <v-row justify="center">
          <div id="anime4">
            <div class="circle small el follow-path"></div>
            <svg id="svg" width="200" height="200" viewBox="0 0 400 400">
              <path
                fill="none"
                stroke="currentColor"
                stroke-width="1"
                :d="spiral"
              ></path>
            </svg>
          </div>
        </v-row>
        <v-row justify="center">
          <v-btn outlined @click="startAnime4">start</v-btn>
        </v-row>
      </v-col>
      <v-col cols="6"></v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import PageTitle from '@/components/PageTitle.vue'
import anime from 'animejs'

export default defineComponent({
  layout: 'gridless',
  components: {
    PageTitle,
  },
  setup() {
    const ratio = 0.93
    const loops = 10
    let radius = 200
    const spiral = ['M0,200']
    const signs = [
      ['', '-'],
      ['', ''],
      ['-', ''],
      ['-', '-'],
    ]
    for (let loop = 0; loop < loops; loop++) {
      for (const i of [0, 1, 2, 3]) {
        spiral.push(
          `a${radius},${radius} 0,0,1 ${signs[i][0]}${radius},${signs[i][1]}${radius}`
        )
        radius *= ratio
      }
    }
    return {
      spiral: spiral.join(' '),
      startAnime1() {
        const path1 = anime.path('#anime1 path')
        anime({
          targets: '#anime1 .el',
          translateX: path1('x'),
          translateY: path1('y'),
          rotate: path1('angle'),
          easing: 'linear',
          duration: 2000,
          loop: true,
        })
      },
      startAnime2() {
        for (const i of [1, 2, 3]) {
          setTimeout(() => {
            const path = anime.path(`#anime2 path.path${i}`)
            anime({
              targets: `#anime2 .el${i}`,
              translateX: path('x'),
              translateY: path('y'),
              rotate: path('angle'),
              easing: 'linear',
              duration: 1000,
              loop: true,
            })
          }, 300 * (i - 1))
        }
      },
      startAnime3() {
        const path = anime.path(`#anime3 path`)
        for (const i of [1, 2, 3]) {
          setTimeout(() => {
            anime({
              targets: `#anime3 .el${i}`,
              translateX: path('x'),
              translateY: path('y'),
              rotate: path('angle'),
              easing: 'linear',
              duration: 3000,
              loop: true,
            })
          }, 1000 * (i - 1))
        }
      },
      startAnime4() {
        const path = anime.path('#anime4 path')
        anime({
          targets: '#anime4 .el',
          translateX: path('x'),
          translateY: path('y'),
          rotate: path('angle'),
          easing: 'linear',
          duration: 10000,
          loop: true,
        })
      },
    }
  },
})
</script>

<style lang="scss">
.anime-page {
  .display-1 {
    color: var(--v-secondary-base);
  }

  .circle {
    pointer-events: none;
    width: 28px;
    height: 28px;
    margin: 1px;
    font-size: 12px;
    background-color: var(--v-error-base);
    border-radius: 50%;
  }

  .orange {
    background-color: var(--v-warning-base);
  }

  .purple {
    background-color: var(--v-accent-base);
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
