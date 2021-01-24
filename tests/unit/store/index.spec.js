import createStore from '@/store/index'

describe('vuex', () => {
  test('ユーザー情報を設定できること', () => {
    const store = createStore
    store.dispatch('login', { id: 1, name: 'test', admin: false })
    expect(store.state.user).toEqual({
      id: 1, name: 'test', admin: false
    })
  })

  test('ユーザー情報を初期化できること', () => {
    const store = createStore
    store.dispatch('logout')
    expect(store.state.user).toEqual({
      id: 0, name: '', admin: false
    })
  })

  test('ユーザーがログイン済みの場合にtrueを返却すること', () => {
    const store = createStore
    store.dispatch('login', { id: 1, name: 'test', admin: false })
    expect(store.getters.isCurrentUser).toBe(true)
  })

  test('ユーザーがログインしていない場合にfalseを返却すること', () => {
    const store = createStore
    store.dispatch('logout')
    expect(store.getters.isCurrentUser).toBe(false)
  })
})
