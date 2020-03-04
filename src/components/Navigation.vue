<template>
  <div v-if="true" class="nav">
    <div v-if="isLogin" class="user-nav">
      <div v-for="route in routes" :key="route.path">
        <v-btn
          v-if="route.name != 'login'"
          :class="route.name"
          :outlined="true"
          class="white--text"
          color="yellow darken-3"
          :nuxt="true"
          :to="route.path"
          >{{ route.name }}</v-btn
        >
      </div>
      <logout />
    </div>
    <div v-else class="guest-nav">
      <v-btn class="white--text" color="yellow darken-3" :nuxt="true" to="/"
        >Home</v-btn
      >
      <v-btn
        class="white--text"
        color="yellow darken-3"
        :nuxt="true"
        to="/login"
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
  data() {
    return {
      routes: []
    }
  },
  computed: {
    isLogin() {
      return this.$store.getters['user/getUser'] != null
    }
  },
  created() {
    this.$router.options.routes.forEach((route) => {
      this.routes.push({
        name: route.name,
        path: route.path
      })
    })
  }
}
</script>

<style lang="scss" scoped></style>
