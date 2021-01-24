import { mount } from '@vue/test-utils'
import flushPromises from 'flush-promises'
import Home from '@/views/Home.vue'

jest.mock('@/api/PostsRepository', () => ({
  index: jest.fn(() => {
    return {
      data: [
        { id: 1, userName: 'test1', displayUpdatedAt: '2020/10/11 10:00:00', content: 'aaa' },
        { id: 2, userName: 'test2', displayUpdatedAt: '2020/10/10 10:00:00', content: 'bbb' }
      ]
    }
  })
}))

describe('Home.vue', () => {
  test('投稿一覧が表示されること', async () => {
    const wrapper = mount(Home)
    await flushPromises()
    expect(wrapper.html()).toContain('test1')
    expect(wrapper.html()).toContain('test2')
  })
})
