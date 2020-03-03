export const state = () => ({
  userPost: null
})

export const mutations = {
  setUserPost(state, UserPost) {
    state.UserPost = UserPost
  }
}

export const getters = {
  getUserPost(state) {
    return state.UserPost
  }
}

export const actions = {}
