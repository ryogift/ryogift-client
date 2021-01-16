import { mount } from '@vue/test-utils'
import InfoNotification from '@/components/atoms/Notification/InfoNotification.vue'

describe('InfoNotification.vue', () => {
  test('props.labelがレンダリングされること', () => {
    const message = 'test'
    const wrapper = mount(InfoNotification, {
      props: { message }
    })
    expect(wrapper.text()).toMatch(message)
  })
})
