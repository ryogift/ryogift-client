import { mount } from '@vue/test-utils'
import PostModal from '@/components/organisms/PostModal.vue'

jest.mock('@/api/AuthRepository', () => ({
  login: jest.fn(() => {
    return { data: { id: 1, name: 'test', admin: false } }
  })
}))

describe('PostModal.vue', () => {
  test('タイトルが表示されること', () => {
    const title = 'test'
    const wrapper = mount(PostModal, {
      props: { title }
    })
    expect(wrapper.get('.modal-card-title').text()).toBe(title)
  })
})
