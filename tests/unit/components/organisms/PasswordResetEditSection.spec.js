import { mount } from '@vue/test-utils'
import flushPromises from 'flush-promises'
import PasswordResetEditSection from '@/components/organisms/PasswordResetEditSection.vue'
import AuthRepository from '@/api/AuthRepository'

jest.mock('@/api/AuthRepository', () => ({
  passwordResetsUpdate: jest.fn()
}))

const mockRoute = {
  query: {
    token: 'test',
    email: 'test@example.com'
  }
}

describe('PasswordResetEditSection.vue', () => {
  test('h1タグのタイトルが表示されること', () => {
    const wrapper = mount(PasswordResetEditSection, {
      global: {
        mocks: { $route: mockRoute }
      }
    })
    expect(wrapper.get('.title').text()).toBe('パスワードのリセット')
  })

  test('パスワード（6文字以上）が入力できること', async () => {
    const wrapper = mount(PasswordResetEditSection, {
      global: {
        mocks: { $route: mockRoute }
      }
    })
    const passwordInput = wrapper.get('.password')
    await passwordInput.setValue('password')
    expect(passwordInput.element.value).toBe('password')
  })

  test('パスワードの再確認が入力できること', async () => {
    const wrapper = mount(PasswordResetEditSection, {
      global: {
        mocks: { $route: mockRoute }
      }
    })
    const passwordConfirmationInput = wrapper.get('.password-confirmation')
    await passwordConfirmationInput.setValue('password')
    expect(passwordConfirmationInput.element.value).toBe('password')
  })

  test('フォームを送信できること', async () => {
    const wrapper = mount(PasswordResetEditSection, {
      global: {
        mocks: { $route: mockRoute }
      }
    })
    await wrapper.get('.submit-button').trigger('submit.prevent')
    await flushPromises()
    expect(wrapper.get('.info-notification').text()).toBe('パスワードがリセットされました。')
  })

  test('APIエラー(パスワードまたはパスワードの確認が未入力)時にエラーメッセージが表示されること', async () => {
    const error = new Error()
    const errorMessage = 'パスワードまたはパスワードの確認が入力されていません。'
    error.response = { status: 422, data: { error: { message: errorMessage } } }
    AuthRepository.passwordResetsUpdate.mockRejectedValue(error)
    const wrapper = mount(PasswordResetEditSection, {
      global: {
        mocks: { $route: mockRoute }
      }
    })
    await wrapper.get('.submit-button').trigger('submit.prevent')
    await flushPromises()
    expect(wrapper.get('.error-notification').text()).toBe(errorMessage)
  })

  test('APIエラー(パスワードが6文字以下)時にエラーメッセージが表示されること', async () => {
    const error = new Error()
    const errorMessages = ['6文字以上でご入力ください。']
    error.response = { status: 422, data: { password: errorMessages } }
    AuthRepository.passwordResetsUpdate.mockRejectedValue(error)
    const wrapper = mount(PasswordResetEditSection, {
      global: {
        mocks: { $route: mockRoute }
      }
    })
    await wrapper.get('.submit-button').trigger('submit.prevent')
    await flushPromises()
    expect(wrapper.get('.error-messages').text()).toBe(errorMessages[0])
  })

  test('APIエラー(パスワードの再確認が6文字以下)時にエラーメッセージが表示されること', async () => {
    const error = new Error()
    const errorMessages = ['6文字以上でご入力ください。']
    error.response = { status: 422, data: { passwordConfirmation: errorMessages } }
    AuthRepository.passwordResetsUpdate.mockRejectedValue(error)
    const wrapper = mount(PasswordResetEditSection, {
      global: {
        mocks: { $route: mockRoute }
      }
    })
    await wrapper.get('.submit-button').trigger('submit.prevent')
    await flushPromises()
    expect(wrapper.get('.error-messages').text()).toBe(errorMessages[0])
  })

  test('APIエラー(予期せぬエラー)時にエラーメッセージが表示されること', async () => {
    const error = new Error()
    error.response = { status: 500 }
    AuthRepository.passwordResetsUpdate.mockRejectedValue(error)
    const wrapper = mount(PasswordResetEditSection, {
      global: {
        mocks: { $route: mockRoute }
      }
    })
    await wrapper.get('.submit-button').trigger('submit.prevent')
    await flushPromises()
    expect(wrapper.get('.error-notification').text()).toBe('予期せぬエラーです。')
  })
})
