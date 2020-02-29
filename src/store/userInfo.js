import {
  getInfo,
  setInfo,
  infoModel,
  updateInfo,
  updateAvtImage,
  updateBackgroundImage,
  getUrlAvtImage,
  getUrlBackgroundImage
} from '@/plugins/lib/userAssist.js'

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
  uploadAvt({ dispatch, rootGetters }, image) {
    const userId = rootGetters['user/getUser'].userId
    updateAvtImage(userId, image).then(() => {
      getUrlAvtImage(userId).then((imageUrl) => {
        dispatch('updateInfo', { avtUrl: imageUrl })
      })
    })
  },
  uploadBackground({ dispatch, rootGetters }, image) {
    const userId = rootGetters['user/getUser'].userId
    updateBackgroundImage(userId, image).then(() => {
      getUrlBackgroundImage(userId).then((imageUrl) => {
        dispatch('updateInfo', { backgroundUrl: imageUrl })
      })
    })
  },
  updateInfo({ dispatch, rootGetters }, { info }) {
    const userId = rootGetters['user/getUser'].userId
    updateInfo(userId, info)
      .then(() => {
        dispatch('retriveInfo')
      })
      .catch((err) => {
        console.log(err)
      })
  },
  createInfo({ commit, rootGetters }, { infoModel }) {
    const userId = rootGetters['user/getUser'].userId
    setInfo(userId, infoModel)
      .then(() => {
        commit('setInfo', infoModel)
      })
      .catch((err) => {
        console.log(err)
      })
  },
  retriveInfo({ commit, dispatch, rootGetters }) {
    const userId = rootGetters['user/getUser'].userId
    getInfo(userId).then((doc) => {
      if (doc.exists) {
        commit('setInfo', doc.data())
      } else {
        dispatch('createInfo', { infoModel })
      }
    })
  },
  deleteInfo({ commit }) {
    commit('setInfo', null)
  }
}
