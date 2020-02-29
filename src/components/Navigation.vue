<template>
  <div class="nav">
    <div v-if="isLogin" class="user-nav">
      <logout />
      <v-btn :outlined="true" color="green lighten-1" :nuxt="true" to="/profile"
        >User Profile</v-btn
      >
      <v-btn :outlined="true" color="green lighten-1" :nuxt="true" to="/message"
        >Messager</v-btn
      >
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
