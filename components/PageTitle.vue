<template>
  <v-row justify="center">
    <div
      class="display-3 primary--text"
      style="margin-top: 30px; margin-bottom: 10px"
    >
      {{ title }}
    </div>
  </v-row>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  props: {
    title: {
      type: String,
      required: true,
    },
  },
})
</script>
