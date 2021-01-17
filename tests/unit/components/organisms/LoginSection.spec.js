import { mount } from '@vue/test-utils'
import LoginSection from '@/components/organisms/LoginSection.vue'

jest.mock('@/api/AuthRepository', () => ({
  login: jest.fn(() => {
    return { data: { id: 1, name: 'test', admin: false } }
  })
}))

describe('LoginSection.vue', () => {
  test('h1タグのタイトルが表示されること', () => {
    const wrapper = mount(LoginSection, {
      global: {
        stubs: ['font-awesome-icon']
      }
    })
    expect(wrapper.get('.title').text()).toEqual('ログイン')
  })

  test('メールアドレスが入力できること', async () => {
    const wrapper = mount(LoginSection, {
      global: {
        stubs: ['font-awesome-icon']
      }
    })
    const emailInput = wrapper.get('.email-input input')
    await emailInput.setValue('test@example.com')
    expect(emailInput.element.value).toBe('test@example.com')
  })

  test('パスワードが入力できること', async () => {
    const wrapper = mount(LoginSection, {
      global: {
        stubs: ['font-awesome-icon']
      }
    })
    const passwordInput = wrapper.get('.password-input input')
    await passwordInput.setValue('password')
    expect(passwordInput.element.value).toBe('password')
  })

  test('フォームを送信できること', async () => {
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
    expect(mockRouter.push).toHaveBeenCalledWith('/')
  })

  test('"パスワードを忘れた場合"をクリック時に"/passwordresets/new"に遷移させること', async () => {
    const mockRouter = {
      push: jest.fn()
    }
    const wrapper = mount(LoginSection, {
      global: {
        stubs: ['font-awesome-icon'],
        mocks: {
          $router: mockRouter
        }
      }
    })
    await wrapper.get('.password-reset').trigger('link')
    expect(mockRouter.push).toHaveBeenCalledWith('/passwordresets/new')
  })
})
