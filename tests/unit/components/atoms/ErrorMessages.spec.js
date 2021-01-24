import { mount } from '@vue/test-utils'
import ErrorMessages from '@/components/atoms/ErrorMessages.vue'

describe('ErrorMessages.vue', () => {
  test('エラーメッセージの一覧が表示されること', () => {
    const errorMessages = ['error1', 'error2']
    const wrapper = mount(ErrorMessages, {
      props: { errorMessages }
    })
    const ul = wrapper.get('.error-messages')
    expect(ul.html()).toMatch(errorMessages[0])
    expect(ul.html()).toMatch(errorMessages[1])
  })
})
