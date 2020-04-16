<template v-if="this.posts">
  <div class="user-posts">
    <post-card v-for="post in posts" :key="post.id" :post="post" />
  </div>
</template>

<script>
import PostCard from '@/components/post/PostCard.vue'
export default {
  name: 'UserPosts',
  components: {
    'post-card': PostCard
  },
  props: {
    posts: {
      type: Array,
      default: null
    }
  }
}
</script>

<style lang="scss" scoped>
.user-posts {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1vw;

  > * {
    margin-top: 3vh;
  }
}
</style>
