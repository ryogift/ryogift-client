import { mount } from '@vue/test-utils'
import EditButton from '@/components/molecules/EditButton.vue'

describe('EditButton.vue', () => {
  test('EditButtonが表示されること', () => {
    const wrapper = mount(EditButton, {})
    expect(wrapper.get('.edit-button').text()).toEqual('編集')
  })
})
