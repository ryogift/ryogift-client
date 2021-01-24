import { mount } from '@vue/test-utils'
import Header from '@/components/organisms/Header.vue'
import { createStore } from 'vuex'

jest.mock('@/api/AuthRepository', () => ({
  logout: jest.fn(),
  clientUser: jest.fn(() => {
    return { data: { id: 1, name: 'test', admin: false } }
  })
}))

describe('Header.vue', () => {
  test('ロゴが表示されること', () => {
    const $store = {
      state: { user: { name: 'test', admin: false } },
      getters: { isCurrentUser: state => state.user.name !== '' }
    }
    const wrapper = mount(Header, {
      global: { mocks: { $store } }
    })
    expect(wrapper.get('.logo').exists()).toBe(true)
  })

  describe('管理者の場合', () => {
    const $store = {
      state: { user: { name: 'test', admin: true } },
      getters: { isCurrentUser: state => state.user.name !== '' }
    }

    test('ユーザー 一覧リンクが表示されること', () => {
      const wrapper = mount(Header, {
        global: { mocks: { $store } }
      })
      expect(wrapper.get('.users-link').text()).toBe('ユーザー 一覧')
    })

    test('ユーザー 一覧リンクをクリック時に"/users"に遷移させること', async () => {
      const mockRouter = { push: jest.fn() }
      const wrapper = mount(Header, {
        global: {
          mocks: { $store, $router: mockRouter }
        }
      })
      await wrapper.get('.users-link').trigger('click')
      expect(mockRouter.push).toHaveBeenCalledWith('/users')
    })
  })

  test('ユーザー名が表示されること', async () => {
    const $store = {
      state: { user: { name: 'test', admin: false } },
      getters: { isCurrentUser: state => state.user.name !== '' }
    }
    const wrapper = mount(Header, {
      global: { mocks: { $store } }
    })
    await wrapper.setData({ isNavEnd: true })
    expect(wrapper.get('.current-user').text()).toBe('test')
  })

  test('ユーザー名をクリック時に右側のドロップダウンメニューが表示されること', async () => {
    const $store = {
      state: { user: { name: 'test', admin: false } },
      getters: { isCurrentUser: state => state.user.name !== '' }
    }
    const wrapper = mount(Header, {
      global: { mocks: { $store } }
    })
    await wrapper.setData({ isNavEnd: true })
    await wrapper.get('.current-user').trigger('click')
    expect(wrapper.get('.right-dropdown').exists()).toBe(true)
  })

  test('パスワードの変更をクリック時に"/updatepassword"に遷移させること', async () => {
    const mockRouter = { push: jest.fn() }
    const $store = {
      state: { user: { name: 'test', admin: false } },
      getters: { isCurrentUser: state => state.user.name !== '' }
    }
    const wrapper = mount(Header, {
      global: {
        mocks: { $store, $router: mockRouter }
      }
    })
    await wrapper.setData({ isNavEnd: true })
    await wrapper.get('.current-user').trigger('click')
    await wrapper.get('.password-link').trigger('click')
    expect(mockRouter.push).toHaveBeenCalledWith('/updatepassword')
  })

  test('ログアウトをクリック時に"/"に遷移させること', async () => {
    const store = createStore({
      state() {
        return {
          user: { id: 1, name: 'test', admin: false }
        }
      },
      getters: { isCurrentUser: state => state.user.name !== '' },
      actions: { logout: jest.fn() }
    })
    const mockRouter = { push: jest.fn() }
    const wrapper = mount(Header, {
      global: {
        mocks: { $router: mockRouter },
        plugins: [store]
      }
    })
    await wrapper.setData({ isNavEnd: true })
    await wrapper.get('.current-user').trigger('click')
    await wrapper.get('.logout-link').trigger('click')
    expect(mockRouter.push).toHaveBeenCalledWith('/')
  })

  test('ログインリンクボタンが表示されること', async () => {
    const store = createStore({
      state() {
        return {
          user: { id: 0, name: '', admin: false }
        }
      }
    })
    const wrapper = mount(Header, {
      global: { plugins: [store] }
    })
    await wrapper.setData({ isNavEnd: true })
    expect(wrapper.get('.login-link-button').text()).toBe('ログイン')
  })

  test('新規登録ボタンが表示されること', async () => {
    const store = createStore({
      state() {
        return {
          user: { id: 0, name: '', admin: false }
        }
      }
    })
    const wrapper = mount(Header, {
      global: { plugins: [store] }
    })
    await wrapper.setData({ isNavEnd: true })
    expect(wrapper.get('.signup-link-button').text()).toBe('新規登録')
  })
})
