import { mount } from '@vue/test-utils'
import PasswordInput from '@/components/atoms/Input/PasswordInput.vue'

describe('PasswordInput.vue', () => {
  test('props.valueが設定されていること', () => {
    const value = 'test'
    const wrapper = mount(PasswordInput, {
      props: { value },
      global: { stubs: ['font-awesome-icon'] }
    })
    expect(wrapper.vm.value).toMatch(value)
  })

  test('valueが設定できること', async () => {
    const wrapper = mount(PasswordInput, {
      global: { stubs: ['font-awesome-icon'] }
    })
    const input = wrapper.find('input')
    await input.setValue('test')
    expect(input.element.value).toMatch('test')
  })

  test('valueをemitsイベントで出力できること', async () => {
    const wrapper = mount(PasswordInput, {
      global: { stubs: ['font-awesome-icon'] }
    })
    const input = wrapper.find('input')
    await input.setValue('test')
    expect(wrapper.emitted('update:value')[0][0]).toMatch('test')
  })
})
