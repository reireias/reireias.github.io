import { mount } from '@vue/test-utils'
import target from '@/pages/articles.vue'

describe('articles', () => {
  it('should be vue instance', () => {
    const wrapper = mount(target)
    expect(wrapper.exists()).toBe(true)
  })
})
