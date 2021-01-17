import { mount } from '@vue/test-utils'
import flushPromises from 'flush-promises'
import UpdatePasswordSection from '@/components/organisms/UpdatePasswordSection.vue'

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
      state: {
        user: {
          id: 1
        }
      }
    }
    const wrapper = mount(UpdatePasswordSection, {
      global: {
        mocks: {
          $store
        }
      }
    })
    await wrapper.get('.submit-button').trigger('submit.prevent')
    await flushPromises()
    expect(wrapper.get('.info-notification').text()).toBe('パスワードを変更しました。')
  })
})
