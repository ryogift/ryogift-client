import { mount } from '@vue/test-utils'
import SubmitButton from '@/components/molecules/SubmitButton.vue'

describe('SubmitButton.vue', () => {
  test('props.labelがレンダリングされること', () => {
    const label = 'test'
    const wrapper = mount(SubmitButton, {
      props: { label }
    })
    expect(wrapper.get('.submit-button').text()).toMatch(label)
  })
})
