import { mount } from '@vue/test-utils'
import flushPromises from 'flush-promises'
import Edit from '@/views/AccountActivations/Edit.vue'

jest.mock('@/api/AuthRepository', () => ({
  accountActivations: jest.fn(() => {
    return { data: { id: 1, name: 'test', admin: false } }
  })
}))

test('アカウント有効化のメッセージが表示されること', async () => {
  const $route = {
    query: { token: 'test', email: 'test@example.com' }
  }
  const $store = {
    dispatch: jest.fn()
  }
  const wrapper = mount(Edit, {
    global: {
      stubs: ['font-awesome-icon'],
      mocks: { $route, $store }
    }
  })
  await flushPromises()
  expect(wrapper.get('.info-notification').text()).toBe('アカウントが有効になりました。')
})
