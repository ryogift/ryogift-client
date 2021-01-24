import { mount } from '@vue/test-utils'
import Link from '@/components/atoms/Link.vue'

describe('Link.vue', () => {
  test('props.labelがリンクに表示されること', () => {
    const label = 'test'
    const wrapper = mount(Link, {
      props: { label }
    })
    const link = wrapper.get('.link')
    expect(link.text()).toMatch(label)
  })
})
