import { mount } from '@vue/test-utils'
import RemoveButton from '@/components/molecules/RemoveButton.vue'

describe('RemoveButton.vue', () => {
  test('RemoveButtonが表示されること', () => {
    const wrapper = mount(RemoveButton, {})
    expect(wrapper.get('.remove-button').text()).toEqual('削除')
  })
})
