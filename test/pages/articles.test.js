import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vue from 'vue'
import Vuetify from 'vuetify'
import target from '@/pages/articles'

Vue.use(Vuetify)
const localVue = createLocalVue()
localVue.use(Vuetify)

describe('articles', () => {
  it('should be vue instance', () => {
    const wrapper = shallowMount(target, {
      localVue,
      Vuetify,
    })
    expect(wrapper.html()).toMatchSnapshot()
  })
})
