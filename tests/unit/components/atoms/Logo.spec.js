import { shallowMount } from '@vue/test-utils'
import Logo from '@/components/atoms/Logo.vue'

describe('Logo.vue', () => {
  test('Logoが表示されること', () => {
    const wrapper = shallowMount(Logo, {})
    expect(wrapper.get('.logo').exists()).toBe(true)
  })
})
