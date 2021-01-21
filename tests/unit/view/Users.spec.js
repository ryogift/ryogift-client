import { mount } from '@vue/test-utils'
import flushPromises from 'flush-promises'
import Users from '@/views/Users.vue'

jest.mock('@/api/UsersRepository', () => ({
  get: jest.fn(() => {
    return { data: [{ id: 1, name: 'test', email: 'test@example.com', displayState: 'アクティブ' }] }
  })
}))

test('loads posts on button click', async () => {
  const wrapper = mount(Users)
  await flushPromises()
  // await wrapper.get('.submit-button').trigger('submit.prevent')
  // expect(mockRouter.push).toHaveBeenCalledWith('/')
})
