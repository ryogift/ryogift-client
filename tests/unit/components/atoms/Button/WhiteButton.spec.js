import { shallowMount } from '@vue/test-utils'
import WhiteButton from '@/components/atoms/Button/WhiteButton.vue'

describe('WhiteButton.vue', () => {
  test('props.labelがレンダリングされること', () => {
    const label = 'test'
    const wrapper = shallowMount(WhiteButton, {
      props: { label }
    })
    expect(wrapper.text()).toMatch(label)
  })
})
