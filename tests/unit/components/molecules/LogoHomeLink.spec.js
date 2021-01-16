import { mount } from '@vue/test-utils'
import LogoHomeLink from '@/components/molecules/LogoHomeLink.vue'

describe('LogoHomeLink.vue', () => {
  test('LogoHomeLinkが表示されること', () => {
    const wrapper = mount(LogoHomeLink, {})
    expect(wrapper.get('.logo-home-link').exists()).toBe(true)
  })

  test('LogoHomeLinkをクリック時に"/"に遷移させること', async () => {
    const mockRouter = {
      push: jest.fn()
    }
    const wrapper = mount(LogoHomeLink, {
      global: {
        mocks: {
          $router: mockRouter
        }
      }
    })
    await wrapper.get('.logo-home-link').trigger('click')
    expect(mockRouter.push).toHaveBeenCalledWith('/')
  })
})
