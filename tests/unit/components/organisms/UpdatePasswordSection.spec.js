import { mount } from '@vue/test-utils'
import flushPromises from 'flush-promises'
import UpdatePasswordSection from '@/components/organisms/UpdatePasswordSection.vue'
import UsersRepository from '@/api/UsersRepository'

jest.mock('@/api/UsersRepository', () => ({
  updatePassword: jest.fn()
}))

describe('UpdatePasswordSection.vue', () => {
  test('h1タグのタイトルが表示されること', () => {
    const wrapper = mount(UpdatePasswordSection)
    expect(wrapper.get('.title').text()).toBe('パスワードの変更')
  })

  test('パスワード（6文字以上）が入力できること', async () => {
    const wrapper = mount(UpdatePasswordSection)
    const passwordInput = wrapper.get('.password')
    await passwordInput.setValue('password')
    expect(passwordInput.element.value).toBe('password')
  })

  test('パスワードの再確認が入力できること', async () => {
    const wrapper = mount(UpdatePasswordSection)
    const passwordConfirmationInput = wrapper.get('.password-confirmation')
    await passwordConfirmationInput.setValue('password')
    expect(passwordConfirmationInput.element.value).toBe('password')
  })

  test('フォームを送信できること', async () => {
    const $store = {
      state: { user: { id: 1 } }
    }
    const wrapper = mount(UpdatePasswordSection, {
      global: {
        mocks: { $store }
      }
    })
    await wrapper.get('.submit-button').trigger('submit.prevent')
    await flushPromises()
    expect(wrapper.get('.info-notification').text()).toBe('パスワードを変更しました。')
  })

  test('APIエラー(パスワードが未入力)時にエラーメッセージが表示されること', async () => {
    const error = new Error()
    const errorMessages = ['ご入力ください。']
    error.response = { status: 422, data: { password: errorMessages } }
    UsersRepository.updatePassword.mockRejectedValue(error)
    const $store = {
      state: { user: { id: 1 } }
    }
    const wrapper = mount(UpdatePasswordSection, {
      global: {
        mocks: { $store }
      }
    })
    await wrapper.get('.submit-button').trigger('submit.prevent')
    await flushPromises()
    expect(wrapper.get('.error-messages').text()).toBe(errorMessages[0])
  })

  test('APIエラー(パスワード確認が未入力)時にエラーメッセージが表示されること', async () => {
    const error = new Error()
    const errorMessages = ['ご入力ください。']
    error.response = { status: 422, data: { passwordConfirmation: errorMessages } }
    UsersRepository.updatePassword.mockRejectedValue(error)
    const $store = {
      state: { user: { id: 1 } }
    }
    const wrapper = mount(UpdatePasswordSection, {
      global: {
        mocks: { $store }
      }
    })
    await wrapper.get('.submit-button').trigger('submit.prevent')
    await flushPromises()
    expect(wrapper.get('.error-messages').text()).toBe(errorMessages[0])
  })

  test('APIエラー(予期せぬエラー)時にエラーメッセージが表示されること', async () => {
    const error = new Error()
    error.response = { status: 500 }
    UsersRepository.updatePassword.mockRejectedValue(error)
    const $store = {
      state: { user: { id: 1 } }
    }
    const wrapper = mount(UpdatePasswordSection, {
      global: {
        mocks: { $store }
      }
    })
    await wrapper.get('.submit-button').trigger('submit.prevent')
    await flushPromises()
    expect(wrapper.get('.error-notification').text()).toBe('予期せぬエラーです。')
  })
})
