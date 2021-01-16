import { mount } from '@vue/test-utils'
import Input from '@/components/atoms/Input/Input.vue'

describe('Input.vue', () => {
  test('props.labelがレンダリングされること', () => {
    const label = 'test'
    const wrapper = mount(Input, {
      props: { label }
    })
    expect(wrapper.text()).toMatch(label)
  })

  test('props.valueが設定されていること', () => {
    const value = 'test'
    const wrapper = mount(Input, {
      props: { value }
    })
    expect(wrapper.vm.value).toMatch(value)
  })
})
