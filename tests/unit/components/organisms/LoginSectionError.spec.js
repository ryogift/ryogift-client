import { mount } from '@vue/test-utils'
import LoginSection from '@/components/organisms/LoginSection.vue'

jest.mock('@/api/AuthRepository', () => ({
  login: jest.fn(() => {
    const error = new Error('error')
    error.response = {
      status: 401,
      data: { error: { message: 'error' } }
    }
    throw error
  })
}))

describe('LoginSection.vue', () => {
  test('エラーメッセージが表示されること', async () => {
    const mockRouter = {
      push: jest.fn()
    }
    const $store = {
      dispatch: jest.fn()
    }
    const wrapper = mount(LoginSection, {
      global: {
        stubs: ['font-awesome-icon'],
        mocks: { $router: mockRouter, $store }
      }
    })
    await wrapper.get('.submit-button').trigger('submit.prevent')
    expect(wrapper.get('.error-notification').text()).toBe('error')
  })
})
