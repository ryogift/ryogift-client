import { mount } from '@vue/test-utils'
import TextareaForm from '@/components/molecules/TextareaForm.vue'

describe('TextareaForm.vue', () => {
  test('textarea-formが表示されること', () => {
    const wrapper = mount(TextareaForm)
    expect(wrapper.get('.textarea-form').exists()).toBe(true)
  })

  test('valueが設定されること', async () => {
    const wrapper = mount(TextareaForm)
    const textarea = wrapper.get('.textarea')
    await textarea.setValue('test')
    expect(textarea.element.value).toBe('test')
  })

  test('valueをemitsイベントで出力できること', async () => {
    const wrapper = mount(TextareaForm)
    const textarea = wrapper.get('.textarea')
    await textarea.setValue('test')
    expect(wrapper.emitted('update:value')[0][0]).toBe('test')
  })

  test('props.hasErrorがtrueの場合にtextareaに"is-danger"が設定されること', () => {
    const hasError = true
    const wrapper = mount(TextareaForm, {
      props: { hasError }
    })
    expect(wrapper.get('.is-danger').exists()).toBe(true)
  })

  test('エラーメッセージのリストが表示されること', () => {
    const hasError = true
    const errorMessages = ['error1', 'error2']
    const wrapper = mount(TextareaForm, {
      props: { hasError, errorMessages }
    })
    const ul = wrapper.find('ul').html()
    expect(ul).toContain('error1')
    expect(ul).toContain('error2')
  })
})
