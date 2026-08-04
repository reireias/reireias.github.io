<template>
  <div class="index-page">
    <div class="index-row">
      <div class="contents-container">
        <div class="animation-wrapper">
          <div id="grid" class="grid main-contents">
            <div v-for="i in 324" :key="i" :class="squareClass(i)"></div>
          </div>
          <div class="avatar-overlay">
            <div class="icon-avatar">
              <img
                src="/icon.png"
                alt="icon"
                style="width: 100%; height: 100%"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import anime from 'animejs'

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
        backgroundColor: '#a6e22e',
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
  min-height: calc(100svh - 64px);
  display: flex !important;
  justify-content: center;
  align-items: center;
  padding: 0 !important;

  .index-row {
    display: flex;
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
    background-color: var(--color-primary);
  }
  .v-cyan {
    background-color: var(--color-secondary);
  }
  .v-red {
    background-color: var(--color-error);
  }
  .v-orange {
    background-color: var(--color-warning);
  }
  .v-purple {
    background-color: var(--color-accent);
  }
  .v-yellow {
    background-color: #e6db74;
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
  .icon-avatar {
    width: 160px;
    height: 160px;
    overflow: hidden;
    border-radius: 50%;
  }
}

@media (width >= 768px) {
  .index-page {
    min-height: calc(100svh - 72px);
  }
}
</style>
