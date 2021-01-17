import { mount } from '@vue/test-utils'
import flushPromises from 'flush-promises'
import UserModal from '@/components/organisms/UserModal.vue'

jest.mock('@/api/UsersRepository', () => ({
  getUser: jest.fn(() => {
    return { data: {
      id: 1, name: 'test', email: 'test@example.com', displayState: 'アクティブ', displayRole: '一般',
      displayCreatedAt: '2021/01/15 10:00:10', displayActivatedAt: '2021/01/17 07:38:10', displayLockedAt: ''
    } }
  })
}))

describe('UserModal.vue', () => {
  test('モーダルのタイトルが表示されること', () => {
    const wrapper = mount(UserModal)
    expect(wrapper.get('.modal-card-title').text()).toBe('ユーザー編集')
  })

  test('ユーザー情報が設定できること', async () => {
    const wrapper = mount(UserModal)
    await flushPromises()
    expect(
      {
        id: wrapper.vm.id, name: wrapper.vm.name, email: wrapper.vm.email, displayState: wrapper.vm.displayState,
        displayRole:wrapper.vm.displayRole, displayCreatedAt: wrapper.vm.displayCreatedAt,
        displayActivatedAt: wrapper.vm.displayActivatedAt, displayLockedAt: wrapper.vm.displayLockedAt
      }
    ).toEqual(
      {
        id: 1, name: 'test', email: 'test@example.com', displayState: 'アクティブ', displayRole: '一般',
        displayCreatedAt: '2021/01/15 10:00:10', displayActivatedAt: '2021/01/17 07:38:10', displayLockedAt: ''
      }
    )
  })
})
