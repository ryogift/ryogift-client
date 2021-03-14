import { mount } from '@vue/test-utils'
import App from '@/App.vue'

describe('App.vue', () => {
  test('ヘッダーが表示されること', () => {
    const $store = {
      state: { user: { name: 'test', admin: false } },
      getters: { isCurrentUser: state => state.user.name !== '' }
    }
    const wrapper = mount(App, {
      global: {
        mocks: { $store },
        stubs: ['router-view']
      },
    })
    expect(wrapper.html()).toContain('header')
  })
})
