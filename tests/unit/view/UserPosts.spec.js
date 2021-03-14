import { mount } from '@vue/test-utils'
import flushPromises from 'flush-promises'
import UserPosts from '@/views/UserPosts.vue'

jest.mock('@/api/UserPostsRepository', () => ({
  index: jest.fn(() => {
    return {
      data: [
        { id: 2, displayUpdatedAt: '2020/10/10 10:00:00', content: 'bbb' },
        { id: 1, displayUpdatedAt: '2020/10/11 10:00:00', content: 'aaa' }
      ]
    }
  }),
  show: jest.fn(() => {
    return { data: { id: 2, displayUpdatedAt: '2020/10/10 10:00:00', content: 'bbb' } }
  }),
  destroy: jest.fn()
}))

describe('UserPosts.vue', () => {
  test('ユーザーの投稿一覧が表示されること', async () => {
    const $store = {
      state: { user: { name: 'test', admin: false } },
      getters: { isCurrentUser: state => state.user.name !== '' }
    }
    const wrapper = mount(UserPosts, {
      global: {
        stubs: ['font-awesome-icon'],
        mocks: { $store }
      }
    })
    await flushPromises()
    expect(wrapper.html()).toContain('bbb')
    expect(wrapper.html()).toContain('aaa')
  })

  test('投稿の作成用モーダルウィンドウが表示されること', async () => {
    const $store = {
      state: { user: { name: 'test', admin: false } },
      getters: { isCurrentUser: state => state.user.name !== '' }
    }
    const wrapper = mount(UserPosts, {
      global: {
        stubs: ['font-awesome-icon'],
        mocks: { $store }
      }
    })
    await flushPromises()
    await wrapper.get('.create-button').trigger('click')
    expect(wrapper.vm.$data.postModal).toBe(true)
  })

  test('投稿の作成用モーダルウィンドウで閉じるボタンクリック後にモーダルウィンドウが閉じること', async () => {
    const $store = {
      state: { user: { name: 'test', admin: false } },
      getters: { isCurrentUser: state => state.user.name !== '' }
    }
    const wrapper = mount(UserPosts, {
      global: {
        stubs: ['font-awesome-icon'],
        mocks: { $store }
      }
    })
    await flushPromises()
    await wrapper.get('.create-button').trigger('click')
    await wrapper.get('.delete').trigger('click')
    expect(wrapper.vm.$data.postModal).toBe(false)
  })

  test('投稿の編集用モーダルウィンドウが表示されること', async () => {
    const $store = {
      state: { user: { name: 'test', admin: false } },
      getters: { isCurrentUser: state => state.user.name !== '' }
    }
    const wrapper = mount(UserPosts, {
      global: {
        stubs: ['font-awesome-icon'],
        mocks: { $store }
      }
    })
    await flushPromises()
    await wrapper.get('.dropdown-menu').trigger('click')
    await wrapper.get('.edit-link-button').trigger('click')
    expect(wrapper.vm.$data.postModal).toBe(true)
  })

  test('投稿の編集用モーダルウィンドウで閉じるボタンクリック後にモーダルウィンドウが閉じること', async () => {
    const $store = {
      state: { user: { name: 'test', admin: false } },
      getters: { isCurrentUser: state => state.user.name !== '' }
    }
    const wrapper = mount(UserPosts, {
      global: {
        stubs: ['font-awesome-icon'],
        mocks: { $store }
      }
    })
    await flushPromises()
    await wrapper.get('.dropdown-menu').trigger('click')
    await wrapper.get('.edit-link-button').trigger('click')
    await wrapper.get('.delete').trigger('click')
    expect(wrapper.vm.$data.postModal).toBe(false)
  })

  test('削除確認モーダルウィンドウが表示されること', async () => {
    const $store = {
      state: { user: { name: 'test', admin: false } },
      getters: { isCurrentUser: state => state.user.name !== '' }
    }
    const wrapper = mount(UserPosts, {
      global: {
        stubs: ['font-awesome-icon'],
        mocks: { $store }
      }
    })
    await flushPromises()
    await wrapper.get('.remove-link-button').trigger('click')
    expect(wrapper.vm.$data.removeModal).toBe(true)
  })

  test('削除確認モーダルウィンドウで削除ボタンクリック後にモーダルウィンドウが閉じること', async () => {
    const $store = {
      state: { user: { name: 'test', admin: false } },
      getters: { isCurrentUser: state => state.user.name !== '' }
    }
    const wrapper = mount(UserPosts, {
      global: {
        stubs: ['font-awesome-icon'],
        mocks: { $store }
      }
    })
    await flushPromises()
    await wrapper.get('.remove-link-button').trigger('click')
    await wrapper.get('.remove-button').trigger('click')
    await flushPromises()
    expect(wrapper.vm.$data.removeModal).toBe(false)
  })

  test('ドロップダウンメニューが表示できること', async () => {
    const $store = {
      state: { user: { name: 'test', admin: false } },
      getters: { isCurrentUser: state => state.user.name !== '' }
    }
    const wrapper = mount(UserPosts, {
      global: {
        stubs: ['font-awesome-icon'],
        mocks: { $store }
      }
    })
    await flushPromises()
    await wrapper.get('.ellipsis-button').trigger('click')
    expect(wrapper.vm.$data.isDropDown).toBe(true)
  })

  test('ドロップダウンメニューが閉じること', async () => {
    const $store = {
      state: { user: { name: 'test', admin: false } },
      getters: { isCurrentUser: state => state.user.name !== '' }
    }
    const wrapper = mount(UserPosts, {
      global: {
        stubs: ['font-awesome-icon'],
        mocks: { $store }
      }
    })
    await flushPromises()
    await wrapper.get('.ellipsis-button').trigger('click')
    await wrapper.get('.ellipsis-button').trigger('click')
    expect(wrapper.vm.$data.isDropDown).toBe(false)
  })

  test('ドロップダウンメニューが全て閉じること', async () => {
    const $store = {
      state: { user: { name: 'test', admin: false } },
      getters: { isCurrentUser: state => state.user.name !== '' }
    }
    const wrapper = mount(UserPosts, {
      global: {
        stubs: ['font-awesome-icon'],
        mocks: { $store }
      }
    })
    await flushPromises()
    await wrapper.get('.ellipsis-button').trigger('click')
    await wrapper.get('.dropdown-background').trigger('click')
    expect(wrapper.vm.$data.isDropDown).toBe(false)
  })
})
