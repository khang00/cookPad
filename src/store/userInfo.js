import {
  getInfo,
  setInfo,
  infoModel,
  updateInfo,
  updatePhotoImage,
  getUrlPhotoImage
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
    updatePhotoImage(userId, image).then(() => {
      getUrlPhotoImage(userId).then((imageUrl) => {
        dispatch('updateInfo', { avtUrl: imageUrl })
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
    const user = rootGetters['user/getUser']
    infoModel.email = user.email
    infoModel.displayName = user.name
    setInfo(user.userId, infoModel)
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
