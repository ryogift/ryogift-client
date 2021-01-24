import { mount } from '@vue/test-utils'
import RemoveModal from '@/components/organisms/RemoveModal.vue'

describe('RemoveModal.vue', () => {
  test('タイトルが表示されること', () => {
    const wrapper = mount(RemoveModal, {
      global: { stubs: ['font-awesome-icon'] }
    })
    expect(wrapper.get('.modal-card-title').text()).toBe('削除確認')
  })

  test('CancelButtonをクリック時にemitsイベントが実行されること', async () => {
    const wrapper = mount(RemoveModal, {
      global: { stubs: ['font-awesome-icon'] }
    })
    await wrapper.get('.cancel-button').trigger('click')
    expect(wrapper.emitted()).toHaveProperty('close')
  })

  test('RemoveButtonをクリック時にemitsイベントが実行されること', async () => {
    const wrapper = mount(RemoveModal, {
      global: { stubs: ['font-awesome-icon'] }
    })
    await wrapper.get('.remove-button').trigger('click')
    expect(wrapper.emitted()).toHaveProperty('remove')
  })

  test('モーダルの右上のボタンをクリック時にemitsイベントが実行されること', async () => {
    const wrapper = mount(RemoveModal, {
      global: { stubs: ['font-awesome-icon'] }
    })
    await wrapper.get('.delete').trigger('click')
    expect(wrapper.emitted()).toHaveProperty('close')
  })
})
