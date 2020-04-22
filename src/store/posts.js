import { retriveAllPost } from '@/plugins/lib/userAssist.js'

export const state = () => ({
  posts: null
})

export const mutations = {
  setPosts(state, posts) {
    state.posts = posts
  }
}

export const getters = {
  getPosts(state) {
    return state.posts
  }
}

export const actions = {
  retrivePosts({ commit }) {
    console.log('retrive posts')
    retriveAllPost().then((allPosts) => {
      commit('setPosts', allPosts)
    })
  }
}
