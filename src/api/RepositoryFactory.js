import UsersRepository from './UsersRepository'
import AuthRepository from './AuthRepository'

const repositories = {
  users: UsersRepository,
  auth: AuthRepository
}

export default {
  get: name => repositories[name]
}
