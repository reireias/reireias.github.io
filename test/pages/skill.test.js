import { mount } from '@vue/test-utils'
import target from '@/pages/skill.vue'

describe('skill', () => {
  it('should be vue instance', () => {
    const wrapper = mount(target)
    expect(wrapper.exists()).toBe(true)
  })
})
