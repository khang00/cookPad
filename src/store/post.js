import { createPost } from '@/plugins/lib/postsAssist.js'

export const state = () => ({
  post: null
})

export const mutations = {
  setPost(state, user) {
    state.user = user
  }
}

export const getters = {
  getPost(state) {
    return state.user
  }
}

export const actions = {
  createPost({ commit, rootGetters }, { post, steps }) {
    const userId = rootGetters['user/getUser'].userId
    createPost(userId, post, steps)
      .then(() => {
        console.log('sucess')
      })
      .catch((err) => {
        console.log(err)
      })
    console.log(post)
    console.log(steps)
  }
}
