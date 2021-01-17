import { mount } from '@vue/test-utils'
import flushPromises from 'flush-promises'
import PasswordResetEditSection from '@/components/organisms/PasswordResetEditSection.vue'

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
        mocks: {
          $route: mockRoute
        }
      }
    })
    expect(wrapper.get('.title').text()).toBe('パスワードのリセット')
  })

  test('パスワード（6文字以上）が入力できること', async () => {
    const wrapper = mount(PasswordResetEditSection, {
      global: {
        mocks: {
          $route: mockRoute
        }
      }
    })
    const passwordInput = wrapper.get('.password')
    await passwordInput.setValue('password')
    expect(passwordInput.element.value).toBe('password')
  })

  test('パスワードの再確認が入力できること', async () => {
    const wrapper = mount(PasswordResetEditSection, {
      global: {
        mocks: {
          $route: mockRoute
        }
      }
    })
    const passwordConfirmationInput = wrapper.get('.password-confirmation')
    await passwordConfirmationInput.setValue('password')
    expect(passwordConfirmationInput.element.value).toBe('password')
  })

  test('フォームを送信できること', async () => {
    const wrapper = mount(PasswordResetEditSection, {
      global: {
        mocks: {
          $route: mockRoute
        }
      }
    })
    await wrapper.get('.submit-button').trigger('submit.prevent')
    await flushPromises()
    expect(wrapper.get('.info-notification').text()).toBe('パスワードがリセットされました。')
  })
})
