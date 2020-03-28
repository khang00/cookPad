<template>
  <div v-if="UserInfo" class="profile">
    <user-info :user-info="UserInfo" />
    <user-posts />
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
    UserInfo() {
      return this.$store.getters['userInfo/getInfo']
    }
  }
}
</script>

<style lang="scss" scoped></style>
