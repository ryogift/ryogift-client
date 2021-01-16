import { mount } from '@vue/test-utils'
import WarningButton from '@/components/atoms/Button/WarningButton.vue'

describe('WarningButton.vue', () => {
  test('props.labelがレンダリングされること', () => {
    const label = 'test'
    const wrapper = mount(WarningButton, {
      props: { label }
    })
    expect(wrapper.text()).toMatch(label)
  })
})
