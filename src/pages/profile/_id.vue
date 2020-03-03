<template>
  <div v-if="ortherUserInfo" class="profile">
    <user-info :user-info="ortherUserInfo" />
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
  data() {
    return {
      routeId: this.$route.params.id
    }
  },
  computed: {
    ortherUserInfo() {
      return {}
    }
  }
}
</script>

<style lang="scss" scoped></style>
