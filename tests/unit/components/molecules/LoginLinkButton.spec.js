import { mount } from '@vue/test-utils'
import LoginLinkButton from '@/components/molecules/LoginLinkButton.vue'

describe('LoginLinkButton.vue', () => {
  test('LoginLinkButtonが表示されること', () => {
    const wrapper = mount(LoginLinkButton)
    expect(wrapper.get('.login-link-button').text()).toBe('ログイン')
  })
})
