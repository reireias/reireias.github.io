import { mount, createLocalVue } from '@vue/test-utils'
import Vuetify from 'vuetify'
import target from '@/pages/index'

const localVue = createLocalVue()
localVue.use(Vuetify)

describe('index', () => {
  it('should be vue instance', () => {
    const wrapper = mount(target, {
      localVue
    })
    expect(wrapper.isVueInstance()).toBeTruthy()
    expect(wrapper.html()).toMatchSnapshot()
  })
})
