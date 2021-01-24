import { mount } from '@vue/test-utils'
import Signup from '@/views/Signup.vue'

describe('Signup.vue', () => {
  test('タイトルが表示されること', async () => {
    const wrapper = mount(Signup, {
      global: { stubs: ['font-awesome-icon'] }
    })
    expect(wrapper.get('.title').text()).toBe('アカウント登録')
  })
})
