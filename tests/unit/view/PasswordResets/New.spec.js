import { mount } from '@vue/test-utils'
import New from '@/views/PasswordResets/New.vue'

describe('New.vue', () => {
  test('タイトルが表示されること', async () => {
    const wrapper = mount(New, {
      global: { stubs: ['font-awesome-icon'] }
    })
    expect(wrapper.get('.title').text()).toBe('パスワードのリセット')
  })
})
