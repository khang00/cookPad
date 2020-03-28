<template>
  <div v-if="readUserInfo" class="profile">
    <user-info :user-info="readUserInfo" />
    <user-posts :posts="readUserInfo.posts" />
  </div>
</template>

<script>
import UserInfo from '@/components/user/UserInfo.vue'
import UserPosts from '@/components/user/UserPosts.vue'

export default {
  name: 'Profile',
  components: {
    'user-info': UserInfo,
    'user-posts': UserPosts
  },
  computed: {
    readUserInfo() {
      return this.$store.getters['displayedUser/getUser']
    }
  },
  watch: {
    '$route.params.id': {
      handler() {
        this.$store.dispatch('displayedUser/retriveInfo', {
          uid: this.$route.params.id
        })
      },
      deep: true,
      immediate: true
    }
  }
}
</script>

<style lang="scss" scoped></style>
