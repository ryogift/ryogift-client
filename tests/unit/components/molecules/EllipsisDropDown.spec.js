import { mount } from '@vue/test-utils'
import EllipsisDropDown from '@/components/molecules/EllipsisDropDown.vue'

describe('EllipsisDropDown.vue', () => {
  test('EllipsisDropDownが表示されること', () => {
    const wrapper = mount(EllipsisDropDown, {
      global: { stubs: ['font-awesome-icon'] }
    })
    expect(wrapper.get('.ellipsis-drop-down').exists()).toBe(true)
  })

  test('DropDown(is-active)が表示されること', () => {
    const wrapper = mount(EllipsisDropDown, {
      props: { isDropDown: true },
      global: { stubs: ['font-awesome-icon'] }
    })
    expect(wrapper.get('.is-active').exists()).toBe(true)
  })

  test('EllipsisButtonをクリック時にemitsイベントが実行されること', async () => {
    const wrapper = mount(EllipsisDropDown, {
      global: { stubs: ['font-awesome-icon'] }
    })
    await wrapper.get('.ellipsis-button').trigger('click')
    expect(wrapper.emitted()).toHaveProperty('toggle')
  })

  test('EditLinkButtonをクリック時にemitsイベントが実行されること', async () => {
    const wrapper = mount(EllipsisDropDown, {
      global: { stubs: ['font-awesome-icon'] }
    })
    await wrapper.get('.edit-link-button').trigger('click')
    expect(wrapper.emitted()).toHaveProperty('close')
    expect(wrapper.emitted()).toHaveProperty('modal')
  })

  test('RemoveLinkButtonをクリック時にemitsイベントが実行されること', async () => {
    const wrapper = mount(EllipsisDropDown, {
      global: { stubs: ['font-awesome-icon'] }
    })
    await wrapper.get('.remove-link-button').trigger('click')
    expect(wrapper.emitted()).toHaveProperty('close')
    expect(wrapper.emitted()).toHaveProperty('remove')
  })
})
