import { reactive } from '@vue/composition-api'

export default function titleStore() {
  const state = reactive({
    title: 'Title',
  })

  return {
    get title() {
      return state.title
    },

    setTitle(value: string) {
      state.title = value
    }
  }
}

export type TitleStore = ReturnType<typeof titleStore>
