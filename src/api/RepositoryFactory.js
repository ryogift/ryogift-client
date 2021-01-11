import UsersRepository from './UsersRepository'
import AuthRepository from './AuthRepository'

const repositories = {
  users: UsersRepository,
  auth: AuthRepository
}

export const ReposiotryFactory = {
  get: name => repositories[name]
}
