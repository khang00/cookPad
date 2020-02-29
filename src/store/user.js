import { auth, authProviders } from '@/plugins/fireauth.js'

export const state = () => ({
  user: null
})

export const mutations = {
  setUser(state, user) {
    state.user = user
  }
}

export const getters = {
  getUser(state) {
    return state.user
  }
}

export const actions = {
  updateUser({ commit }, user) {
    return new Promise((resolve) => {
      commit('setUser', user)
      resolve()
    })
  },

  sendVerificationEmail() {
    auth.currentUser.sendEmailVerification()
  },

  createAccount({ commit, dispatch }, { email, password }) {
    return new Promise((resolve, reject) => {
      auth
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
          dispatch('sendVerificationEmail')
          resolve()
        })
        .catch((error) => {
          reject(error)
        })
    })
  },

  logout() {
    return new Promise((resolve, reject) => {
      auth
        .signOut()
        .then(() => {
          resolve()
        })
        .catch((error) => {
          reject(error)
        })
    })
  },

  login({ commit }, { email, password, type }) {
    if (type === 'Login') {
      return auth.signInWithEmailAndPassword(email, password)
    } else {
      return auth.signInWithPopup(authProviders[type])
    }
  }
}
