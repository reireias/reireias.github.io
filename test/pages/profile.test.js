import { mount } from '@vue/test-utils'
import target from '@/pages/profile.vue'

describe('profile', () => {
  it('should be vue instance', () => {
    const wrapper = mount(target)
    expect(wrapper.exists()).toBe(true)
  })
})
