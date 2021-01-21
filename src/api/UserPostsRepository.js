import Reposiotry from './Repository'

const resource = '/user_posts'
export default {
  index () {
    return Reposiotry.get(`${resource}`)
  },
  show (id) {
    return Reposiotry.get(`${resource}/${id}`)
  },
  create (payload) {
    return Reposiotry.post(`${resource}`, payload)
  },
  update (id, payload) {
    return Reposiotry.put(`${resource}/${id}`, payload)
  },
  destroy (id) {
    return Reposiotry.delete(`${resource}/${id}`)
  }
}
