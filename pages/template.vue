<template>
  <div>
    <page-title title="Template"></page-title>
    <v-card>
      <v-card-title>card title</v-card-title>
      <v-card-subtitle>card sub title</v-card-subtitle>
      <v-card-text>text</v-card-text>
      <v-container>
        <key-value-row k="key" v="value"></key-value-row>
        <key-value-row k="key" v="value"></key-value-row>
        <key-value-row k="key" v="value"></key-value-row>
      </v-container>
    </v-card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import PageTitle from '@/components/PageTitle.vue'
import KeyValueRow from '@/components/KeyValueRow.vue'

export default defineComponent({
  layout: 'new',
  components: {
    PageTitle,
    KeyValueRow,
  },
})
</script>
