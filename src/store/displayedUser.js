import { getInfo } from '@/plugins/lib/userAssist.js'

export const state = () => ({
  user: null,
  savedPosts: []
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
  retriveInfo({ commit, dispatch, getters }, { uid }) {
    return new Promise((resolve, reject) => {
      getInfo(uid)
        .then((userInfo) => {
          commit('setUser', userInfo)
          resolve()
        })
        .catch((err) => {
          reject(err)
        })
    })
  },
  deleteInfo({ commit }) {
    commit('setUser', null)
  }
}
