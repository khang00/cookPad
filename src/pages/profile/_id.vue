<template>
  <div v-if="readUserInfo" class="profile">
    <user-info :user-info="readUserInfo" />
    <user-post />
  </div>
</template>

<script>
import UserInfo from '@/components/user/UserInfo.vue'
import UserPost from '@/components/user/UserPost.vue'

export default {
  name: 'Profile',
  components: {
    'user-info': UserInfo,
    'user-post': UserPost
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
