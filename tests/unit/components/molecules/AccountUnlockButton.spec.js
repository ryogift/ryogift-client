import { mount } from '@vue/test-utils'
import AccountUnlockButton from '@/components/molecules/AccountUnlockButton.vue'

describe('AccountUnlockButton.vue', () => {
  test('AccountUnlockButtonが表示されること', () => {
    const wrapper = mount(AccountUnlockButton, {})
    expect(wrapper.get('.account-unlock-button').text()).toEqual('アカウントロック解除')
  })
})
