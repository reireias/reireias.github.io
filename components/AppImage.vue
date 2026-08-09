<template>
  <NuxtImg :src="src" :alt="alt" format="webp" />
</template>
<script setup lang="ts">
withDefaults(defineProps<{ src: string; alt?: string }>(), { alt: '' })
</script>
<style scoped>
img {
  display: block;
  max-width: 100%;
  height: auto;
}
</style>
