<template>
  <div v-if="UserInfo" class="profile">
    <user-info :user-info="UserInfo" />
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
    UserInfo() {
      return this.$store.getters['userInfo/getInfo']
    }
  }
}
</script>

<style lang="scss" scoped></style>
