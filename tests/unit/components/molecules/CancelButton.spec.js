import { mount } from '@vue/test-utils'
import CancelButton from '@/components/molecules/CancelButton.vue'

describe('CancelButton.vue', () => {
  test('CancelButtonが表示されること', () => {
    const wrapper = mount(CancelButton, {})
    expect(wrapper.get('.cancel-button').text()).toEqual('キャンセル')
  })
})
