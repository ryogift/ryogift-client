import { mount } from '@vue/test-utils'
import flushPromises from 'flush-promises'
import Users from '@/views/admin/Users.vue'

jest.mock('@/api/UsersRepository', () => ({
  get: jest.fn(() => {
    return {
      data: [
        { id: 1, name: 'test1', email: 'test1@example.com', displayState: 'アクティブ' },
        { id: 2, name: 'test2', email: 'test2@example.com', displayState: '非アクティブ' }
      ]
    }
  })
}))

test('ユーザー 一覧が表示されること', async () => {
  const wrapper = mount(Users, {
    global: { stubs: ['font-awesome-icon'] }
  })
  await flushPromises()
  expect(wrapper.get('tbody').html()).toContain('test1')
  expect(wrapper.get('tbody').html()).toContain('test2')
})
