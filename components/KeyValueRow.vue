<template>
  <v-row>
    <v-col>{{ k }}</v-col>
    <v-col>{{ v }}</v-col>
  </v-row>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    // key is reserved keywords.
    k: {
      type: String,
      required: true,
    },
    v: {
      type: String,
      required: true,
    },
  },
})
</script>
