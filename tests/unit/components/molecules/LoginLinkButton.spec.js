import { mount } from '@vue/test-utils'
import LoginLinkButton from '@/components/molecules/LoginLinkButton.vue'

describe('LoginLinkButton.vue', () => {
  test('LoginLinkButtonが表示されること', () => {
    const wrapper = mount(LoginLinkButton, {})
    expect(wrapper.get('.login-link-button').text()).toEqual('ログイン')
  })

  test('LoginLinkButtonをクリック時に"/login"に遷移させること', async () => {
    const mockRouter = {
      push: jest.fn()
    }
    const wrapper = mount(LoginLinkButton, {
      global: {
        mocks: {
          $router: mockRouter
        }
      }
    })
    await wrapper.get('.login-link-button').trigger('click')
    expect(mockRouter.push).toHaveBeenCalledWith('/login')
  })
})
