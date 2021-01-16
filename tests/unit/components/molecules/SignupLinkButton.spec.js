import { mount } from '@vue/test-utils'
import SignupLinkButton from '@/components/molecules/SignupLinkButton.vue'

describe('SignupLinkButton.vue', () => {
  test('SignupLinkButtonが表示されること', () => {
    const wrapper = mount(SignupLinkButton, {})
    expect(wrapper.get('.signup-link-button').text()).toEqual('新規登録')
  })

  test('SignupLinkButtonをクリック時に"/signup"に遷移させること', async () => {
    const mockRouter = {
      push: jest.fn()
    }
    const wrapper = mount(SignupLinkButton, {
      global: {
        mocks: {
          $router: mockRouter
        }
      }
    })
    await wrapper.get('.signup-link-button').trigger('click')
    expect(mockRouter.push).toHaveBeenCalledWith('/signup')
  })
})
