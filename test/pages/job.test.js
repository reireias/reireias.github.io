import { mount } from '@vue/test-utils'
import target from '@/pages/job.vue'

describe('job', () => {
  it('should be vue instance', () => {
    const wrapper = mount(target)
    expect(wrapper.exists()).toBe(true)
  })
})
