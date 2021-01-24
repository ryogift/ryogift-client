import { mount } from '@vue/test-utils'
import CreateButton from '@/components/atoms/Button/CreateButton.vue'

describe('CreateButton.vue', () => {
  test('CreateButtonが表示されること', () => {
    const wrapper = mount(CreateButton, {
      global: { stubs: ['font-awesome-icon'] }
    })
    expect(wrapper.get('.create-button').text()).toBe('追加')
  })
})
