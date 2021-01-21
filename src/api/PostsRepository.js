import Reposiotry from './Repository'

const resource = '/posts'
export default {
  index () {
    return Reposiotry.get(`${resource}`)
  },
  show (id) {
    return Reposiotry.get(`${resource}/${id}`)
  }
}
