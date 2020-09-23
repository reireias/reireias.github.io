<template>
  <div>
    <page-title title="Anime"></page-title>

    <v-container>
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
        <div id="anime2">
          <div class="circle small el follow-path"></div>
          <svg id="svg" width="200" height="200" viewBox="-10 -60 120 120">
            <path
              fill="none"
              stroke="currentColor"
              stroke-width="1"
              d="M0,0 A50,30 0,1,0 100,0 A50,30 0,1,0 0,0"
            ></path>
          </svg>
        </div>
      </v-row>

      <v-row justify="center">
        <div id="anime3">
          <div class="circle small el follow-path"></div>
          <svg id="svg" width="200" height="200" viewBox="-10 -60 120 120">
            <path
              fill="none"
              stroke="currentColor"
              stroke-width="1"
              d="M0,0 A50,30 -45,1,0 100,0 A50,30 -45,1,0 0,0"
            ></path>
          </svg>
        </div>
      </v-row>

      <v-row justify="center">
        <div id="anime4">
          <div class="circle small el1 follow-path"></div>
          <div class="circle small el2 follow-path"></div>
          <svg id="svg" width="200" height="200" viewBox="-60 -60 120 120">
            <path
              class="path1"
              fill="none"
              stroke="currentColor"
              stroke-width="0"
              d="M-30,0 A5,2 45,1,0 30,0 A5,2 45,1,0 -30,0"
            ></path>
            <path
              class="path2"
              fill="none"
              stroke="currentColor"
              stroke-width="0"
              d="M-30,0 A5,2 -45,1,0 30,0 A5,2 -45,1,0 -30,0"
            ></path>
          </svg>
        </div>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from '@vue/composition-api'
import PageTitle from '@/components/PageTitle.vue'
import anime from 'animejs'

export default defineComponent({
  layout: 'new',
  components: {
    PageTitle,
  },
  setup() {
    onMounted(() => {
      const path1 = anime.path('#anime1 path')
      anime({
        targets: '#anime1 .el',
        translateX: path1('x'),
        translateY: path1('y'),
        rotate: path1('angle'),
        autoplay: false,
        easing: 'linear',
        duration: 2000,
        loop: true,
      })

      const path2 = anime.path('#anime2 path')
      anime({
        targets: '#anime2 .el',
        translateX: path2('x'),
        translateY: path2('y'),
        rotate: path2('angle'),
        autoplay: false,
        easing: 'linear',
        duration: 2000,
        loop: true,
      })

      const path3 = anime.path('#anime3 path')
      anime({
        targets: '#anime3 .el',
        translateX: path3('x'),
        translateY: path3('y'),
        rotate: path3('angle'),
        autoplay: false,
        easing: 'linear',
        duration: 2000,
        loop: true,
      })

      const path41 = anime.path('#anime4 path.path1')
      anime({
        targets: '#anime4 .el1',
        translateX: path41('x'),
        translateY: path41('y'),
        rotate: path41('angle'),
        autoplay: false,
        easing: 'linear',
        duration: 1100,
        loop: true,
      })
      const path42 = anime.path('#anime4 path.path2')
      anime({
        targets: '#anime4 .el2',
        translateX: path42('x'),
        translateY: path42('y'),
        rotate: path42('angle'),
        autoplay: false,
        easing: 'linear',
        duration: 1000,
        loop: true,
      })
    })
  },
})
</script>

<style lang="scss">
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
  background-color: red;
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
