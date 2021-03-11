import Reposiotry from './Repository'

const resource = '/posts'
class PostsRepository {
  static index () {
    return Reposiotry.get(`${resource}`)
  }

  static show (id) {
    return Reposiotry.get(`${resource}/${id}`)
  }
}
export default PostsRepository
