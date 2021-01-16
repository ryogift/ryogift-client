import { mount } from '@vue/test-utils'
import SaveButton from '@/components/molecules/SaveButton.vue'

describe('SaveButton.vue', () => {
  test('SaveButtonが表示されること', () => {
    const wrapper = mount(SaveButton, {})
    expect(wrapper.get('.save-button').text()).toEqual('保存')
  })
})
