import { mount } from '@vue/test-utils'
import target from '@/pages/index.vue'

describe('index', () => {
  it('should be vue instance', () => {
    const wrapper = mount(target)
    expect(wrapper.exists()).toBe(true)
  })
})
