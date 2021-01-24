import { mount } from '@vue/test-utils'
import RemoveButton from '@/components/atoms/Button/RemoveButton.vue'

describe('RemoveButton.vue', () => {
  test('RemoveButtonが表示されること', () => {
    const wrapper = mount(RemoveButton, {
      global: { stubs: ['font-awesome-icon'] }
    })
    expect(wrapper.get('.remove-button').text()).toBe('削除')
  })
})
