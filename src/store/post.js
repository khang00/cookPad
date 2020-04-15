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
    const user = rootGetters['userInfo/getInfo']
    const filterPost = {
      caption: post.name,
      decription: post.description,
      ownerUid: user.uid,
      MainIngredients: post.mainIngredients[0],
      Ingredients: post.subIngredients,
      postOwnerName: user.displayName,
      postOwnerPhotoUrl: user.photoUrl,
      time: new Date()
    }
    createPost(user, filterPost, steps, post.images.slice())
  }
}
