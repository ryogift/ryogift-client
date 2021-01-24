import { mount } from '@vue/test-utils'
import EditButton from '@/components/atoms/Button/EditButton.vue'

describe('EditButton.vue', () => {
  test('EditButtonが表示されること', () => {
    const wrapper = mount(EditButton, {
      global: { stubs: ['font-awesome-icon'] }
    })
    expect(wrapper.get('.edit-button').text()).toBe('編集')
  })
})
