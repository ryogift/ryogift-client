import { mount } from '@vue/test-utils'
import ErrorNotification from '@/components/atoms/Notification/ErrorNotification.vue'

describe('ErrorNotification.vue', () => {
  test('props.labelがレンダリングされること', () => {
    const message = 'test'
    const wrapper = mount(ErrorNotification, {
      props: { message }
    })
    expect(wrapper.text()).toMatch(message)
  })
})
