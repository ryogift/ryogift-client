import { mount } from '@vue/test-utils'
import UsersTable from '@/components/organisms/UsersTable.vue'

const users = [
  { id: 1, name: 'test', email: 'test@example.com', displayState: 'アクティブ' }
]

describe('UsersTable.vue', () => {
  test('props.usersがレンダリングされること', () => {
    const wrapper = mount(UsersTable, {
      props: { users },
      global: { stubs: ['font-awesome-icon'] }
    })
    const tbody = wrapper.get('tbody').html()
    expect(tbody).toContain(1)
    expect(tbody).toContain('test')
    expect(tbody).toContain('test@example.com')
    expect(tbody).toContain('アクティブ')
  })

  test('編集ボタンをクリック時にemitsイベントが実行されること', async () => {
    const wrapper = mount(UsersTable, {
      props: { users },
      global: { stubs: ['font-awesome-icon'] }
    })
    await wrapper.get('.edit-button').trigger('click')
    expect(wrapper.emitted()).toHaveProperty('edit')
  })
})
