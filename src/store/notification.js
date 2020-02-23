export const state = () => ({
  token: null
})

export const mutations = {
  setToken(state, token) {
    state.token = token
  }
}

export const getters = {
  getToken(state) {
    return state.token
  }
}

export const actions = {
  updateToken({ commit }, token) {
    return new Promise((resolve) => {
      commit('setToken', token)
      resolve()
    })
  }
}
