import { mount } from '@vue/test-utils'
import EllipsisButton from '@/components/atoms/Button/EllipsisButton.vue'

describe('EllipsisButton.vue', () => {
  test('EllipsisButtonが表示されること', () => {
    const wrapper = mount(EllipsisButton, {
      global: { stubs: ['font-awesome-icon'] }
    })
    expect(wrapper.get('.ellipsis-button').exists()).toBe(true)
  })
})
