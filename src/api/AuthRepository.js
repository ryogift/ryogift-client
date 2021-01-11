import Reposiotry from './Repository'

export default {
  login (payload) {
    return Reposiotry.post('/login', payload)
  },
  logout () {
    return Reposiotry.delete('/logout')
  },
  accountActivations (id, email) {
    return Reposiotry.get(`/account_activations/${id}/edit?email=${email}`)
  },
  passwordResets (payload) {
    return Reposiotry.post('/password_resets', payload)
  }
}
