<template>
  <v-app>
    <v-main>
      <v-container>
        <v-row justify="center">
          <div class="display-4">{{ title }}</div>
        </v-row>
        <v-row justify="center">
          <v-col cols="12" sm="4">
            <nuxt />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent, computed, provide } from '@vue/composition-api'
import titleStore from '@/stores/title'
import TitleStoreKey from '@/stores/title-key'

export default defineComponent({
  setup() {
    const store = titleStore()
    const title = computed(() => store.title)
    provide(TitleStoreKey, store)

    return {
      title,
    }
  },
})
</script>
