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
            <div class="circle small el2 follow-path"></div>
            <div class="circle small el3 follow-path"></div>
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
    return {
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
          const path = anime.path(`#anime2 path.path${i}`)
          anime({
            targets: `#anime2 .el${i}`,
            translateX: path('x'),
            translateY: path('y'),
            rotate: path('angle'),
            easing: 'linear',
            duration: 1000 + i * 100,
            loop: true,
          })
        }
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
}
.square {
  pointer-events: none;
  width: 28px;
  height: 28px;
  margin: 1px;
  font-size: 12px;
  background-color: red;
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

.small {
  width: 18px;
  height: 18px;
}

.follow-path {
  position: absolute;
  margin-top: -9px;
  margin-left: -9px;
}
</style>
