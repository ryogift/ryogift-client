import { mount } from '@vue/test-utils'
import InfoButton from '@/components/atoms/Button/InfoButton.vue'

describe('InfoButton.vue', () => {
  test('props.labelがレンダリングされること', () => {
    const label = 'test'
    const wrapper = mount(InfoButton, {
      props: { label }
    })
    expect(wrapper.text()).toMatch(label)
  })
})
