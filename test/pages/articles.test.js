import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vue from 'vue'
import Vuetify from 'vuetify'
import CompositionApi from '@vue/composition-api'
import target from '@/pages/articles'

Vue.use(Vuetify)
const localVue = createLocalVue()
localVue.use(Vuetify)
localVue.use(CompositionApi)

describe('articles', () => {
  let vuetify

  beforeEach(() => {
    vuetify = new Vuetify()
  })

  it('should be vue instance', () => {
    const wrapper = shallowMount(target, {
      localVue,
      vuetify,
    })
    expect(wrapper.html()).toMatchSnapshot()
  })
})
