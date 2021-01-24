import { mount } from '@vue/test-utils'
import EditLinkButton from '@/components/atoms/Button/EditLinkButton.vue'

describe('EditLinkButton.vue', () => {
  test('EditLinkButtonが表示されること', () => {
    const wrapper = mount(EditLinkButton, {
      global: { stubs: ['font-awesome-icon'] }
    })
    expect(wrapper.get('.edit-link-button').text()).toBe('編集')
  })
})
