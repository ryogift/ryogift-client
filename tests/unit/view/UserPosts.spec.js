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
  })
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
})
