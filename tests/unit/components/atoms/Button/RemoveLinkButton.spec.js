import { mount } from '@vue/test-utils'
import RemoveLinkButton from '@/components/atoms/Button/RemoveLinkButton.vue'

describe('RemoveLinkButton.vue', () => {
  test('RemoveLinkButtonが表示されること', () => {
    const wrapper = mount(RemoveLinkButton, {
      global: { stubs: ['font-awesome-icon'] }
    })
    expect(wrapper.get('.remove-link-button').text()).toBe('削除')
  })
})
