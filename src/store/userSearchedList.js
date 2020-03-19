import { getUsers } from '@/plugins/lib/userAssist.js'

export const state = () => ({
  users: []
})

export const mutations = {
  setUsers(state, users) {
    state.users = users
  }
}

export const getters = {
  getUsers(state) {
    return state.users
  }
}

export const actions = {
  retriveUsers({ commit }) {
    return new Promise((resolve, reject) => {
      getUsers()
        .then((users) => {
          commit('setUsers', users)
          resolve()
        })
        .catch((err) => {
          commit('setUsers', [])
          reject(err)
        })
    })
  }
}
