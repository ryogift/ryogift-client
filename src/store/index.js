import { createStore } from 'vuex'

export default createStore({
  state: {
    user: {
      name: '',
      admin: false
    }
  },
  mutations: {
    login (state, payload) {
      state.user.name = payload.name
      state.user.admin = payload.admin
    },
    logout (state) {
      state.user.name = ''
      state.user.admin = false
    }
  },
  actions: {
    login ({ commit }, { name, admin }) {
      commit('login', { name, admin })
    },
    logout ({ commit }) {
      commit('logout')
    }
  },
  modules: {
  }
})
