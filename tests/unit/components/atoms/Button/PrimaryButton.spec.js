import { mount } from '@vue/test-utils'
import PrimaryButton from '@/components/atoms/Button/PrimaryButton.vue'

describe('PrimaryButton.vue', () => {
  test('props.labelがレンダリングされること', () => {
    const label = 'test'
    const wrapper = mount(PrimaryButton, {
      props: { label }
    })
    expect(wrapper.text()).toMatch(label)
  })
})
