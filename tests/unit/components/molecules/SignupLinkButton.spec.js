import { mount } from '@vue/test-utils'
import SignupLinkButton from '@/components/molecules/SignupLinkButton.vue'

describe('SignupLinkButton.vue', () => {
  test('SignupLinkButtonが表示されること', () => {
    const wrapper = mount(SignupLinkButton)
    expect(wrapper.get('.signup-link-button').text()).toBe('新規登録')
  })
})
