<template>
  <v-card>
    <v-card-title>card title</v-card-title>
    <v-card-subtitle>card sub title</v-card-subtitle>
    <v-card-text>text</v-card-text>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, inject } from '@vue/composition-api'
import TitleStoreKey from '../stores/title-key'

export default defineComponent({
  layout: 'new',
  setup() {
    const store = inject(TitleStoreKey)
    if (!store) {
      throw new Error(`${TitleStoreKey} is not provided`)
    }
    store.setTitle('Template')
  },
})
</script>
