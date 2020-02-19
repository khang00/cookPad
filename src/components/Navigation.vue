<template>
  <div class="nav">
    <div v-if="isLogin" class="user-nav">
      <logout />
      <nuxt-link to="/profile" class="button--grey">User Profile</nuxt-link>
    </div>
  </div>
</template>

<script>
import Logout from './Logout.vue'
export default {
  name: 'Navigation',
  components: {
    logout: Logout
  },
  computed: {
    isLogin() {
      return this.$store.getters['user/getUser'] != null
    }
  }
}
</script>

<style lang="scss" scoped></style>
