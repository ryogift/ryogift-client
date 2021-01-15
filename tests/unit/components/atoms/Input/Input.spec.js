import { shallowMount } from '@vue/test-utils'
import Input from '@/components/atoms/Input/Input.vue'

describe('Input.vue', () => {
  test('props.labelがレンダリングされること', () => {
    const label = 'test'
    const wrapper = shallowMount(Input, {
      props: { label }
    })
    expect(wrapper.text()).toMatch(label)
  })

  test('props.valueが設定されていること', () => {
    const value = 'test'
    const wrapper = shallowMount(Input, {
      props: { value }
    })
    expect(wrapper.vm.value).toMatch(value)
  })
})
