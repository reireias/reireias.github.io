<template>
  <v-container class="index-page fill-height" fluid>
    <v-row justify="center" align="center">
      <v-col class="contents-container" cols="12">
        <div class="animation-wrapper">
          <div id="grid" class="grid main-contents">
            <div v-for="i in 324" :key="i" :class="squareClass(i)"></div>
          </div>
          <div class="avatar-overlay">
            <v-avatar size="160" class="icon-avatar">
              <img
                src="/icon.png"
                alt="icon"
                style="width: 100%; height: 100%"
              />
            </v-avatar>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { defineComponent, ref, getCurrentInstance, onMounted } from 'vue'
import anime from 'animejs'

const useVuetify = () => {
  const instance = getCurrentInstance()
  return instance?.proxy?.$vuetify
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
  setup() {
    if (typeof definePageMeta !== 'undefined') {
      definePageMeta({
        layout: 'gridless',
      })
    }
    const showAvatar = ref(false)
    const vuetify = useVuetify()

    const runAnimation = () => {
      if (!anime?.timeline) return
      const timeline = anime.timeline({
        complete: () => {
          showAvatar.value = true
          anime({
            targets: '.avatar-overlay',
            scale: [0.3, 1],
            opacity: 1,
            easing: 'easeOutBack',
            duration: 300,
          })
        },
      })

      // 1. タイルが中央から拡大表示
      timeline.add({
        targets: '#grid .el',
        scale: [{ value: 1, easing: 'easeInQuad', duration: 150 }],
        opacity: [{ value: 1, easing: 'linear', duration: 1 }],
        delay: anime.stagger(8, { grid: [18, 18], from: 'center' }),
      })

      // 2. タイルが変色しながら中央から収縮（タイルが収縮して消えるアニメーション）
      timeline.add({
        targets: '#grid .el',
        scale: 0,
        backgroundColor: vuetify?.theme?.themes?.dark?.primary || '#1976D2',
        easing: 'easeInQuad',
        duration: 150,
        delay: anime.stagger(8, { grid: [18, 18], from: 'center' }),
      })
    }

    onMounted(() => {
      runAnimation()
    })

    const squareClass = (index: number) => {
      const color = COLOR_CLASSES[index % COLOR_CLASSES.length]
      return `square small el ${color}`
    }

    return {
      showAvatar,
      squareClass,
    }
  },
})
</script>

<style lang="scss">
.index-page {
  height: 100vh;
  display: flex !important;
  justify-content: center;
  align-items: center;
  padding: 0 !important;

  .v-row {
    height: 100%;
    width: 100%;
    margin: 0;
    align-items: center;
    justify-content: center;
  }

  .animation-wrapper {
    position: relative;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 360px;
    height: 360px;
  }

  .square {
    pointer-events: none;
    width: 18px;
    height: 18px;
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
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .main-contents {
    margin: auto;
  }
  .avatar-overlay {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
  }
}
</style>
