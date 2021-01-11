import Reposiotry from './Repository'

const resource = '/users'
export default {
  get () {
    return Reposiotry.get(`${resource}`)
  },
  getUser (id) {
    return Reposiotry.get(`${resource}/${id}`)
  },
  signup (payload) {
    return Reposiotry.post(`${resource}`, payload)
  },
  lock (id) {
    return Reposiotry.put(`${resource}/${id}/lock`)
  },
  unlock (id) {
    return Reposiotry.put(`${resource}/${id}/unlock`)
  }
}
