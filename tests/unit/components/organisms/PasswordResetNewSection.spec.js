import { mount } from '@vue/test-utils'
import flushPromises from 'flush-promises'
import PasswordResetNewSection from '@/components/organisms/PasswordResetNewSection.vue'
import AuthRepository from '@/api/AuthRepository'

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

  test('APIエラー(アカウントが存在しない)時にエラーメッセージが表示されること', async () => {
    const error = new Error()
    const errorMessage = 'ご入力したメールアドレスのアカウントは存在しません。'
    error.response = { status: 404, data: { error: { message: errorMessage } } }
    AuthRepository.passwordResetsCreate.mockRejectedValue(error)
    const wrapper = mount(PasswordResetNewSection)
    await wrapper.get('.submit-button').trigger('submit.prevent')
    await flushPromises()
    expect(wrapper.get('.error-notification').text()).toBe(errorMessage)
  })

  test('APIエラー(メールアドレスが未入力)時にエラーメッセージが表示されること', async () => {
    const error = new Error()
    const errorMessages = ['ご入力ください。']
    error.response = { status: 422, data: { email: errorMessages } }
    AuthRepository.passwordResetsCreate.mockRejectedValue(error)
    const wrapper = mount(PasswordResetNewSection)
    await wrapper.get('.submit-button').trigger('submit.prevent')
    await flushPromises()
    expect(wrapper.get('.error-messages').text()).toBe(errorMessages[0])
  })

  test('APIエラー(予期せぬエラー)時にエラーメッセージが表示されること', async () => {
    const error = new Error()
    error.response = { status: 500 }
    AuthRepository.passwordResetsCreate.mockRejectedValue(error)
    const wrapper = mount(PasswordResetNewSection)
    await wrapper.get('.submit-button').trigger('submit.prevent')
    await flushPromises()
    expect(wrapper.get('.error-notification').text()).toBe('予期せぬエラーです。')
  })
})
