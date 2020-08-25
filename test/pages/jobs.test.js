import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vue from 'vue'
import Vuetify from 'vuetify'
import CompositionApi from '@vue/composition-api'
import target from '@/pages/jobs'

Vue.use(Vuetify)
const localVue = createLocalVue()
localVue.use(Vuetify)
localVue.use(CompositionApi)

describe('jobs', () => {
  it('should be vue instance', () => {
    const wrapper = shallowMount(target, {
      localVue,
      Vuetify,
    })
    expect(wrapper.html()).toMatchSnapshot()
  })
})
