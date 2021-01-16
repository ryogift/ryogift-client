import { mount } from '@vue/test-utils'
import InputForm from '@/components/molecules/InputForm.vue'

describe('InputForm.vue', () => {
  test('props.labelがレンダリングされること', () => {
    const label = 'test'
    const wrapper = mount(InputForm, {
      props: { label }
    })
    expect(wrapper.get('.label').text()).toMatch(label)
  })

  test('valueが設定されること', async () => {
    const wrapper = mount(InputForm)
    const input = wrapper.get('.input')
    await input.setValue('test')
    expect(input.element.value).toBe('test')
  })

  test('valueをemitsイベントで出力できること', async () => {
    const wrapper = mount(InputForm)
    const input = wrapper.get('.input')
    await input.setValue('test')
    expect(wrapper.emitted('update:value')[0][0]).toBe('test')
  })

  test('props.hasErrorがtrueの場合にinputに"is-danger"が設定されること', () => {
    const hasError = true
    const wrapper = mount(InputForm, {
      props: { hasError }
    })
    expect(wrapper.get('.is-danger').exists()).toBe(true)
  })

  test('エラーメッセージのリストが表示されること', () => {
    const hasError = true
    const errorMessages = ['error1', 'error2']
    const wrapper = mount(InputForm, {
      props: { hasError, errorMessages }
    })
    const ul = wrapper.find('ul').html()
    expect(ul).toContain('error1')
    expect(ul).toContain('error2')
  })
})
