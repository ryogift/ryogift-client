import { shallowMount } from '@vue/test-utils'
import Loading from '@/components/atoms/Loading.vue'

describe('Loading.vue', () => {
  test('Loadingが表示されること', () => {
    const wrapper = shallowMount(Loading, {})
    expect(wrapper.get('.loading').exists()).toBe(true)
  })
})
