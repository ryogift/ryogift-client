import { mount } from '@vue/test-utils'
import flushPromises from 'flush-promises'
import SignupSection from '@/components/organisms/SignupSection.vue'
import UsersRepository from '@/api/UsersRepository'

jest.mock('@/api/UsersRepository', () => ({
  signup: jest.fn()
}))

describe('SignupSection.vue', () => {
  test('h1タグのタイトルが表示されること', () => {
    const wrapper = mount(SignupSection)
    expect(wrapper.get('.title').text()).toBe('アカウント登録')
  })

  test('名前が入力できること', async () => {
    const wrapper = mount(SignupSection)
    const nameInput = wrapper.get('.name')
    await nameInput.setValue('test')
    expect(nameInput.element.value).toBe('test')
  })

  test('メールアドレスが入力できること', async () => {
    const wrapper = mount(SignupSection)
    const emailInput = wrapper.get('.email')
    await emailInput.setValue('test@example.com')
    expect(emailInput.element.value).toBe('test@example.com')
  })

  test('パスワード（6文字以上）が入力できること', async () => {
    const wrapper = mount(SignupSection)
    const passwordInput = wrapper.get('.password')
    await passwordInput.setValue('password')
    expect(passwordInput.element.value).toBe('password')
  })

  test('パスワードの再確認が入力できること', async () => {
    const wrapper = mount(SignupSection)
    const passwordConfirmationInput = wrapper.get('.password-confirmation')
    await passwordConfirmationInput.setValue('password')
    expect(passwordConfirmationInput.element.value).toBe('password')
  })

  test('フォームを送信できること', async () => {
    const wrapper = mount(SignupSection)
    await wrapper.get('.submit-button').trigger('submit.prevent')
    await flushPromises()
    expect(wrapper.get('.info-notification').text()).toBe('メールをチェックしてアカウントを有効にしてください。')
  })

  test('APIエラー(401)時にエラーメッセージが表示されること', async () => {
    const error = new Error()
    const errorMessage = 'メールアドレスとパスワードの組み合わせが無効です。'
    error.response = { status: 401, data: { error: { message: errorMessage } } }
    UsersRepository.signup.mockRejectedValue(error)
    const wrapper = mount(SignupSection)
    await wrapper.get('.submit-button').trigger('submit.prevent')
    await flushPromises()
    expect(wrapper.get('.error-notification').text()).toBe(errorMessage)
  })

  test('APIエラー(403)時にエラーメッセージが表示されること', async () => {
    const error = new Error()
    const errorMessage = 'アカウントは有効になっていません。メールをご確認ください。'
    error.response = { status: 403, data: { error: { message: errorMessage } } }
    UsersRepository.signup.mockRejectedValue(error)
    const wrapper = mount(SignupSection)
    await wrapper.get('.submit-button').trigger('submit.prevent')
    await flushPromises()
    expect(wrapper.get('.error-notification').text()).toBe(errorMessage)
  })

  test('APIエラー(名前が未入力)時にエラーメッセージが表示されること', async () => {
    const error = new Error()
    const errorMessages = ['ご入力ください。']
    error.response = { status: 422, data: { name: errorMessages } }
    UsersRepository.signup.mockRejectedValue(error)
    const wrapper = mount(SignupSection)
    await wrapper.get('.submit-button').trigger('submit.prevent')
    await flushPromises()
    expect(wrapper.get('.error-messages').text()).toBe(errorMessages[0])
  })

  test('APIエラー(メールアドレスが未入力)時にエラーメッセージが表示されること', async () => {
    const error = new Error()
    const errorMessages = ['ご入力ください。']
    error.response = { status: 422, data: { email: errorMessages } }
    UsersRepository.signup.mockRejectedValue(error)
    const wrapper = mount(SignupSection)
    await wrapper.get('.submit-button').trigger('submit.prevent')
    await flushPromises()
    expect(wrapper.get('.error-messages').text()).toBe(errorMessages[0])
  })

  test('APIエラー(パスワードが未入力)時にエラーメッセージが表示されること', async () => {
    const error = new Error()
    const errorMessages = ['ご入力ください。']
    error.response = { status: 422, data: { password: errorMessages } }
    UsersRepository.signup.mockRejectedValue(error)
    const wrapper = mount(SignupSection)
    await wrapper.get('.submit-button').trigger('submit.prevent')
    await flushPromises()
    expect(wrapper.get('.error-messages').text()).toBe(errorMessages[0])
  })

  test('APIエラー(パスワードの確認が未入力)時にエラーメッセージが表示されること', async () => {
    const error = new Error()
    const errorMessages = ['ご入力ください。']
    error.response = { status: 422, data: { passwordConfirmation: errorMessages } }
    UsersRepository.signup.mockRejectedValue(error)
    const wrapper = mount(SignupSection)
    await wrapper.get('.submit-button').trigger('submit.prevent')
    await flushPromises()
    expect(wrapper.get('.error-messages').text()).toBe(errorMessages[0])
  })

  test('APIエラー(予期せぬエラー)時にエラーメッセージが表示されること', async () => {
    const error = new Error()
    error.response = { status: 500 }
    UsersRepository.signup.mockRejectedValue(error)
    const wrapper = mount(SignupSection)
    await wrapper.get('.submit-button').trigger('submit.prevent')
    await flushPromises()
    expect(wrapper.get('.error-notification').text()).toBe('予期せぬエラーです。')
  })
})
