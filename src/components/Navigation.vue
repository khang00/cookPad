<template>
  <div class="nav">
    <div v-if="isLogin" class="user-nav">
      <v-btn :outlined="true" color="green lighten-1" :nuxt="true" to="/"
        >Home</v-btn
      >
      <v-btn :outlined="true" color="green lighten-1" :nuxt="true" to="/profile"
        >User Profile</v-btn
      >
      <v-btn :outlined="true" color="green lighten-1" :nuxt="true" to="/message"
        >Messager</v-btn
      >
      <logout />
    </div>
    <div v-else class="guest-nav">
      <v-btn
        :outlined="true"
        color="green lighten-1"
        :nuxt="true"
        to="/createAccount"
        >Create Account</v-btn
      >
      <v-btn :outlined="true" color="green lighten-1" :nuxt="true" to="/login"
        >Login</v-btn
      >
    </div>
  </div>
</template>

<script>
import Logout from './auth/Logout.vue'
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
