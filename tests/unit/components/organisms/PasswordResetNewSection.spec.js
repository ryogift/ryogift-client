import { mount } from '@vue/test-utils'
import flushPromises from 'flush-promises'
import PasswordResetNewSection from '@/components/organisms/PasswordResetNewSection.vue'

jest.mock('@/api/AuthRepository', () => ({
  passwordResetsCreate: jest.fn()
}))

describe('PasswordResetNewSection.vue', () => {
  test('h1タグのタイトルが表示されること', () => {
    const wrapper = mount(PasswordResetNewSection)
    expect(wrapper.get('.title').text()).toBe('パスワードのリセット')
  })

  test('メールアドレスが入力できること', async () => {
    const wrapper = mount(PasswordResetNewSection)
    const emailInput = wrapper.get('.email')
    await emailInput.setValue('test@example.com')
    expect(emailInput.element.value).toBe('test@example.com')
  })

  test('フォームを送信できること', async () => {
    const wrapper = mount(PasswordResetNewSection)
    await wrapper.get('.submit-button').trigger('submit.prevent')
    await flushPromises()
    expect(wrapper.get('.info-notification').text()).toBe('パスワードのリセットについてのメールを送信しました。')
  })
})
