import { mount } from '@vue/test-utils'
import Edit from '@/views/passwordResets/Edit.vue'

const mockRoute = {
  query: { token: 'test', email: 'test@example.com' }
}

describe('Edit.vue', () => {
  test('タイトルが表示されること', async () => {
    const wrapper = mount(Edit, {
      global: {
        stubs: ['font-awesome-icon'],
        mocks: { $route: mockRoute }
      }
    })
    expect(wrapper.get('.title').text()).toBe('パスワードのリセット')
  })
})
