import { shallowMount } from '@vue/test-utils'
import SuccessButton from '@/components/atoms/Button/SuccessButton.vue'

describe('SuccessButton.vue', () => {
  test('props.labelがレンダリングされること', () => {
    const label = 'test'
    const wrapper = shallowMount(SuccessButton, {
      props: { label }
    })
    expect(wrapper.text()).toMatch(label)
  })
})
