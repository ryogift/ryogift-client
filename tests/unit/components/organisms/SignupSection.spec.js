import { mount } from '@vue/test-utils'
import flushPromises from 'flush-promises'
import SignupSection from '@/components/organisms/SignupSection.vue'

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
})
