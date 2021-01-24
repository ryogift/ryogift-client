import { mount } from '@vue/test-utils'
import UpdatePassword from '@/views/UpdatePassword.vue'

describe('UpdatePassword.vue', () => {
  test('タイトルが表示されること', async () => {
    const wrapper = mount(UpdatePassword, {
      global: { stubs: ['font-awesome-icon'] }
    })
    expect(wrapper.get('.title').text()).toBe('パスワードの変更')
  })
})
