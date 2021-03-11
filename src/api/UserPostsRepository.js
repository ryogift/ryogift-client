import Reposiotry from './Repository'

const resource = '/user_posts'
class UserPostsRepository {
  static index () {
    return Reposiotry.get(`${resource}`)
  }

  static show (id) {
    return Reposiotry.get(`${resource}/${id}`)
  }

  static create (payload) {
    return Reposiotry.post(`${resource}`, payload)
  }

  static update (id, payload) {
    return Reposiotry.put(`${resource}/${id}`, payload)
  }

  static destroy (id) {
    return Reposiotry.delete(`${resource}/${id}`)
  }
}
export default UserPostsRepository
