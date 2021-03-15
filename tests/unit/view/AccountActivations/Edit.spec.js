import { mount } from '@vue/test-utils'
import flushPromises from 'flush-promises'
import Edit from '@/views/AccountActivations/Edit.vue'
import AuthRepository from '@/api/AuthRepository'

jest.mock('@/api/AuthRepository', () => ({
  accountActivations: jest.fn(() => {
    return { data: { id: 1, name: 'test', admin: false } }
  })
}))

test('アカウント有効化のメッセージが表示されること', async () => {
  const $route = {
    query: { token: 'test', email: 'test@example.com' }
  }
  const $store = {
    dispatch: jest.fn()
  }
  const wrapper = mount(Edit, {
    global: {
      stubs: ['font-awesome-icon'],
      mocks: { $route, $store }
    }
  })
  await flushPromises()
  expect(wrapper.get('.info-notification').text()).toBe('アカウントが有効になりました。')
})

test('APIエラー(401)時にエラーメッセージが表示されること', async () => {
  const error = new Error()
  const errorMessage = 'メールアドレスとパスワードの組み合わせが無効です。'
  error.response = { status: 401, data: { error: { message: errorMessage } } }
  AuthRepository.accountActivations.mockRejectedValue(error)
  const $route = {
    query: { token: 'test', email: 'test@example.com' }
  }
  const $store = {
    dispatch: jest.fn()
  }
  const wrapper = mount(Edit, {
    global: {
      stubs: ['font-awesome-icon'],
      mocks: { $route, $store }
    }
  })
  await flushPromises()
  expect(wrapper.get('.error-notification').text()).toBe(errorMessage)
})

test('APIエラー(予期せぬエラー)時にエラーメッセージが表示されること', async () => {
  const error = new Error()
  error.response = { status: 500 }
  AuthRepository.accountActivations.mockRejectedValue(error)
  const $route = {
    query: { token: 'test', email: 'test@example.com' }
  }
  const $store = {
    dispatch: jest.fn()
  }
  const wrapper = mount(Edit, {
    global: {
      stubs: ['font-awesome-icon'],
      mocks: { $route, $store }
    }
  })
  await flushPromises()
  expect(wrapper.get('.error-notification').text()).toBe('予期せぬエラーです。')
})
