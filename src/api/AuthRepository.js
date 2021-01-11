import Reposiotry from './Repository'

export default {
  login (payload) {
    return Reposiotry.post('/login', payload)
  },
  logout () {
    return Reposiotry.delete('/logout')
  },
  accountActivations (token, payload) {
    return Reposiotry.put(`/account_activations/${token}`, payload)
  },
  passwordResetsCreate (payload) {
    return Reposiotry.post('/password_resets', payload)
  },
  passwordResetsUpdate (token, payload) {
    return Reposiotry.put(`/password_resets/${token}`, payload)
  }
}
