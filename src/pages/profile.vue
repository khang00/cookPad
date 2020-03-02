<template>
  <div class="profile">
    <user-info />
    <div class="post-wrapper"></div>
  </div>
</template>

<script>
import UserInfo from '@/components/user/UserInfo.vue'

export default {
  name: 'Profile',
  components: {
    'user-info': UserInfo
  }
}
</script>

<style lang="scss" scoped>
.post-wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 1vw 1vw;
}
</style>
