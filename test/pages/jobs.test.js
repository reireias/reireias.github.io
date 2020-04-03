import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vue from 'vue'
import Vuetify from 'vuetify'
import target from '@/pages/jobs'

Vue.use(Vuetify)
const localVue = createLocalVue()
localVue.use(Vuetify)

describe('jobs', () => {
  it('should be vue instance', () => {
    const wrapper = shallowMount(target, {
      localVue,
      Vuetify,
    })
    expect(wrapper.isVueInstance()).toBeTruthy()
    expect(wrapper.html()).toMatchSnapshot()
  })
})
