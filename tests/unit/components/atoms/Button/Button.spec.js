import { shallowMount } from '@vue/test-utils'
import Button from '@/components/atoms/Button/Button.vue'

describe('Button.vue', () => {
  test('props.labelがレンダリングされること', () => {
    const label = 'test'
    const wrapper = shallowMount(Button, {
      props: { label }
    })
    expect(wrapper.text()).toMatch(label)
  })
})
