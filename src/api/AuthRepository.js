import Reposiotry from './Repository'

export default {
  login (payload) {
    return Reposiotry.post('/login', payload)
  },
  logout () {
    return Reposiotry.delete('/logout')
  },
  accountActivations (token, email) {
    return Reposiotry.get(`/account_activations/${token}/edit?email=${email}`)
  },
  passwordResetsCreate (payload) {
    return Reposiotry.post('/password_resets', payload)
  },
  passwordResetsUpdate (token, payload) {
    return Reposiotry.put(`/password_resets/${token}`, payload)
  }
}
