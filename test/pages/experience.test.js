import { mount } from '@vue/test-utils'
import target from '@/pages/experience.vue'

describe('experience', () => {
  it('should be vue instance', () => {
    const wrapper = mount(target)
    expect(wrapper.exists()).toBe(true)
  })
})
