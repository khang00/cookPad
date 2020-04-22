<template>
  <div class="users-viewer">
    <post-card
      v-for="(post, index) in filteredPosts"
      :key="index"
      :post="post"
    />
  </div>
</template>

<script>
import PostCard from '@/components/post/PostCard.vue'
export default {
  name: 'UsersViewer',
  components: {
    'post-card': PostCard
  },
  props: {
    filter: {
      type: Object,
      default: null
    }
  },
  computed: {
    posts() {
      return this.$store.getters['posts/getPosts']
    },
    filteredPosts() {
      if (
        this.filter === null ||
        this.filter === {} ||
        this.filter.content === ''
      ) {
        return this.posts
      }
      const filteredPosts = []
      this.posts.forEach((post) => {
        if (post.caption.includes(this.filter.content)) {
          filteredPosts.push(post)
        }
      })
      return filteredPosts
    }
  },
  mounted() {
    this.$store.dispatch('posts/retrivePosts')
  }
}
</script>

<style lang="scss" scoped>
.users-viewer {
  margin-top: 3vh;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 2vw;
}
</style>
