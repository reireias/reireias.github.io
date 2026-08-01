<template>
  <v-row justify="center">
    <h1 class="page-title text-primary">
      {{ title }}
    </h1>
  </v-row>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    title: {
      type: String,
      required: true,
    },
  },
})
</script>

<style scoped lang="scss">
.page-title {
  font-size: 3.75rem;
  font-weight: 300;
  line-height: 3.75rem;
  letter-spacing: -0.0083em;
  margin-top: 30px;
  margin-bottom: 10px;
  color: rgb(var(--v-theme-primary));
}
</style>
