import { mount } from '@vue/test-utils'
import PostModal from '@/components/organisms/PostModal.vue'
import flushPromises from 'flush-promises'
import UserPostsRepository from '@/api/UserPostsRepository'

jest.mock('@/api/UserPostsRepository', () => ({
  show: jest.fn(),
  create: jest.fn(),
  update: jest.fn()
}))

describe('PostModal.vue', () => {
  test('タイトルが表示されること', () => {
    const title = 'test'
    const wrapper = mount(PostModal, {
      props: { title }
    })
    expect(wrapper.get('.modal-card-title').text()).toBe(title)
  })

  test('投稿内容が設定されること', async () => {
    const title = 'test'
    const type = 'update'
    const content = 'test content'
    UserPostsRepository.show.mockResolvedValue({ data: { content } })
    const wrapper = mount(PostModal, {
      props: { title, type }
    })
    await flushPromises()
    expect(wrapper.vm.$data.content.value).toBe(content)
  })

  test('投稿内容が登録できること', async () => {
    const title = 'test'
    const type = 'create'
    const wrapper = mount(PostModal, {
      props: { title, type }
    })
    wrapper.vm.$data.content.value = 'test content'
    wrapper.find("form").trigger("submit.prevent")
    await flushPromises()
    expect(wrapper.emitted()).toHaveProperty('close')
  })

  test('投稿内容が更新できること', async () => {
    const title = 'test'
    const type = 'update'
    const id = 1
    const content = 'test content'
    UserPostsRepository.show.mockResolvedValue({ data: { content } })
    const wrapper = mount(PostModal, {
      props: { title, type, id }
    })
    wrapper.find("form").trigger("submit.prevent")
    await flushPromises()
    expect(wrapper.emitted()).toHaveProperty('close')
  })

  test('APIエラー(401)時にエラーメッセージが表示されること', async () => {
    const error = new Error()
    const errorMessage = 'test'
    error.response = { status: 401, data: { error: { message: errorMessage } } }
    UserPostsRepository.create.mockRejectedValue(error)
    const title = 'test'
    const type = 'create'
    const wrapper = mount(PostModal, {
      props: { title, type }
    })
    wrapper.find("form").trigger("submit.prevent")
    await flushPromises()
    expect(wrapper.vm.$data.errorMessage).toBe(errorMessage)
  })

  test('APIエラー(403)時にエラーメッセージが表示されること', async () => {
    const error = new Error()
    const errorMessage = 'test'
    error.response = { status: 403, data: { error: { message: errorMessage } } }
    UserPostsRepository.create.mockRejectedValue(error)
    const title = 'test'
    const type = 'create'
    const wrapper = mount(PostModal, {
      props: { title, type }
    })
    wrapper.find("form").trigger("submit.prevent")
    await flushPromises()
    expect(wrapper.vm.$data.errorMessage).toBe(errorMessage)
  })

  test('APIエラー(423)時にエラーメッセージが表示されること', async () => {
    const error = new Error()
    const errorMessage = 'test'
    error.response = { status: 423, data: { error: { message: errorMessage } } }
    UserPostsRepository.create.mockRejectedValue(error)
    const title = 'test'
    const type = 'create'
    const wrapper = mount(PostModal, {
      props: { title, type }
    })
    wrapper.find("form").trigger("submit.prevent")
    await flushPromises()
    expect(wrapper.vm.$data.errorMessage).toBe(errorMessage)
  })

  test('APIエラー(422)時にエラーメッセージが表示されること', async () => {
    const error = new Error()
    const errorMessages = ['test']
    error.response = { status: 422, data: { content: errorMessages } }
    UserPostsRepository.create.mockRejectedValue(error)
    const title = 'test'
    const type = 'create'
    const wrapper = mount(PostModal, {
      props: { title, type }
    })
    wrapper.find("form").trigger("submit.prevent")
    await flushPromises()
    expect(wrapper.vm.$data.content.errorMessages[0]).toBe(errorMessages[0])
  })

  test('APIエラー(予期せぬエラー)時にエラーメッセージが表示されること', async () => {
    const error = new Error()
    const errorMessages = ['test']
    error.response = { status: 500 }
    UserPostsRepository.create.mockRejectedValue(error)
    const title = 'test'
    const type = 'create'
    const wrapper = mount(PostModal, {
      props: { title, type }
    })
    wrapper.find("form").trigger("submit.prevent")
    await flushPromises()
    expect(wrapper.vm.$data.errorMessage).toBe('予期せぬエラーです。')
  })
})
