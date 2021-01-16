import { mount } from '@vue/test-utils'
import AccountLockButton from '@/components/molecules/AccountLockButton.vue'

describe('AccountLockButton.vue', () => {
  test('AccountLockButtonが表示されること', () => {
    const wrapper = mount(AccountLockButton, {})
    expect(wrapper.get('.account-lock-button').text()).toEqual('アカウントロック')
  })
})
