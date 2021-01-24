import { mount } from '@vue/test-utils'
import Login from '@/views/Login.vue'

describe('Login.vue', () => {
  test('タイトルが表示されること', async () => {
    const wrapper = mount(Login, {
      global: { stubs: ['font-awesome-icon'] }
    })
    expect(wrapper.get('.title').text()).toBe('ログイン')
  })
})
