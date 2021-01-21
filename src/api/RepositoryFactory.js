import UsersRepository from './UsersRepository'
import AuthRepository from './AuthRepository'
import PostsRepository from './PostsRepository'
import UserPostsRepository from './UserPostsRepository'

const repositories = {
  users: UsersRepository,
  auth: AuthRepository,
  posts: PostsRepository,
  userPosts: UserPostsRepository
}

export default {
  get: name => repositories[name]
}
