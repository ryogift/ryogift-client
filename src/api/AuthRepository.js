import Reposiotry from './Repository'

class AuthRepository {
  static login (payload) {
    return Reposiotry.post('/login', payload)
  }

  static logout () {
    return Reposiotry.delete('/logout')
  }

  static accountActivations (token, payload) {
    return Reposiotry.put(`/account_activations/${token}`, payload)
  }

  static passwordResetsCreate (payload) {
    return Reposiotry.post('/password_resets', payload)
  }

  static passwordResetsUpdate (token, payload) {
    return Reposiotry.put(`/password_resets/${token}`, payload)
  }

  static clientUser () {
    return Reposiotry.get('/client_user')
  }
}

export default AuthRepository
