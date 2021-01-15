import { shallowMount } from '@vue/test-utils'
import DangerButton from '@/components/atoms/Button/DangerButton.vue'

describe('DangerButton.vue', () => {
  test('props.labelがレンダリングされること', () => {
    const label = 'test'
    const wrapper = shallowMount(DangerButton, {
      props: { label }
    })
    expect(wrapper.text()).toMatch(label)
  })
})
