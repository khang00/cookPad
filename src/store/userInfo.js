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
    return new Promise((resolve, reject) => {
      const userId = rootGetters['user/getUser'].userId
      updatePhotoImage(userId, image)
        .then(() => {
          getUrlPhotoImage(userId).then((imageUrl) => {
            dispatch('updateInfo', { info: { photoUrl: imageUrl } }).then(
              () => {
                resolve()
              }
            )
          })
        })
        .catch((err) => {
          reject(err)
        })
    })
  },
  updateInfo({ dispatch, rootGetters }, { info }) {
    return new Promise((resolve, reject) => {
      const userId = rootGetters['user/getUser'].userId
      updateInfo(userId, info)
        .then(() => {
          dispatch('retriveInfo').then(() => {
            resolve()
          })
        })
        .catch((err) => {
          reject(err)
        })
    })
  },
  createInfo({ commit, rootGetters }, { infoModel }) {
    return new Promise((resolve, reject) => {
      const user = rootGetters['user/getUser']
      infoModel.email = user.email
      infoModel.displayName = user.name
      infoModel.uid = user.uid
      setInfo(user.userId, infoModel)
        .then(() => {
          commit('setInfo', infoModel)
          resolve()
        })
        .catch((err) => {
          console.log(err)
          reject(err)
        })
    })
  },
  retriveInfo({ commit, dispatch, rootGetters }) {
    return new Promise((resolve, reject) => {
      const userId = rootGetters['user/getUser'].userId
      getInfo(userId)
        .then((userInfo) => {
          if (userInfo !== null) {
            commit('setInfo', userInfo)
            resolve()
          } else {
            dispatch('createInfo', { infoModel }).then(() => {
              resolve()
            })
          }
        })
        .catch((err) => {
          reject(err)
        })
    })
  },
  deleteInfo({ commit }) {
    commit('setInfo', null)
  }
}
