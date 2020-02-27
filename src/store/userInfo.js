import { getInfo, setInfo, infoModel } from '@/plugins/lib/userInfoQuery.js'

export const state = () => ({
  userInfo: null
})

export const mutations = {
  setInfo(state, userInfo) {
    state.userInfo = userInfo
  }
}

export const getters = {
  getInfo(state) {
    return state.userInfo
  }
}

export const actions = {
  updateInfo({ commit }, { userId, info }) {
    setInfo(userId, info)
      .then(() => {
        commit('setInfo', info)
      })
      .catch((err) => {
        console.log(err)
      })
  },
  createInfo({ commit }, { userId, infoModel }) {
    setInfo(userId, infoModel)
      .then(() => {
        commit('setInfo', infoModel)
      })
      .catch((err) => {
        console.log(err)
      })
  },
  retriveInfo({ commit, dispatch }, userId) {
    getInfo(userId).then((doc) => {
      if (doc.exists) {
        commit('setInfo', doc.data())
      } else {
        dispatch('createInfo', { userId, infoModel })
      }
    })
  },
  deleteInfo({ commit }) {
    commit('setInfo', null)
  }
}
