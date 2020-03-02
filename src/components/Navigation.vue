<template>
  <div v-if="true" class="nav">
    <div v-for="route in routes" :key="route.path" class="user-nav">
      <v-btn
        :class="route.name"
        :outlined="true"
        color="green lighten-1"
        :nuxt="true"
        :to="route.path"
        >{{ route.name }}</v-btn
      >
    </div>
    <logout />
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

<style lang="scss" scoped>
.nav {
  width: 20vw;
}
</style>
