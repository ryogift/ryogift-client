import { mount } from '@vue/test-utils'
import EmailInput from '@/components/atoms/Input/EmailInput.vue'

describe('EmailInput.vue', () => {
  test('props.valueが設定されていること', () => {
    const value = 'test'
    const wrapper = mount(EmailInput, {
      props: { value },
      global: {
        stubs: ['font-awesome-icon']
      }
    })
    expect(wrapper.vm.value).toMatch(value)
  })

  test('valueが設定できること', async () => {
    const wrapper = mount(EmailInput, {
      global: {
        stubs: ['font-awesome-icon']
      }
    })
    const input = wrapper.find('input')
    await input.setValue('test')
    expect(input.element.value).toMatch('test')
  })

  test('valueをemitsイベントで出力できること', async () => {
    const wrapper = mount(EmailInput, {
      global: {
        stubs: ['font-awesome-icon']
      }
    })
    const input = wrapper.find('input')
    await input.setValue('test')
    expect(wrapper.emitted('update:value')[0][0]).toMatch('test')
  })
})
