import { createStore } from 'vuex'

export default createStore({
  state: {
    user: {
      id: 0,
      name: '',
      admin: false
    }
  },
  mutations: {
    login (state, payload) {
      state.user.id = payload.id
      state.user.name = payload.name
      state.user.admin = payload.admin
    },
    logout (state) {
      state.user.id = 0
      state.user.name = ''
      state.user.admin = false
    }
  },
  actions: {
    login ({ commit }, { id, name, admin }) {
      commit('login', { id, name, admin })
    },
    logout ({ commit }) {
      commit('logout')
    }
  },
  modules: {
  }
})
