import Reposiotry from './Repository'

const resource = '/users'
class UsersRepository {
  static get () {
    return Reposiotry.get(`${resource}`)
  }

  static getUser (id) {
    return Reposiotry.get(`${resource}/${id}`)
  }

  static signup (payload) {
    return Reposiotry.post(`${resource}`, payload)
  }

  static lock (id) {
    return Reposiotry.put(`${resource}/${id}/lock`)
  }

  static unlock (id) {
    return Reposiotry.put(`${resource}/${id}/unlock`)
  }

  static updatePassword (id, payload) {
    return Reposiotry.put(`${resource}/${id}/update_password`, payload)
  }
}
export default UsersRepository
