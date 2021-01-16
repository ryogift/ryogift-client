import { mount } from '@vue/test-utils'
import LinkButton from '@/components/atoms/Button/LinkButton.vue'

describe('LinkButton.vue', () => {
  test('props.labelがレンダリングされること', () => {
    const label = 'test'
    const wrapper = mount(LinkButton, {
      props: { label }
    })
    expect(wrapper.text()).toMatch(label)
  })
})
