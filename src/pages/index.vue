<template>
  <div class="container">
    <div>
      <navigation />
      <p v-if="user && !user.emailVerified">Please verify your email</p>
      <logo />
      <h1 class="title">
        Cookpad
      </h1>
      <h2 class="subtitle">
        A social network for food
      </h2>
      <div class="links">
        <a
          href="https://github.com/khang00/cookpad"
          target="_blank"
          class="button--grey"
        >
          Github
        </a>
        <v-btn :outlined="true" color="green lighten-1" :nuxt="true" to="/login"
          >Login</v-btn
        >
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import Navigation from '~/components/Navigation.vue'

export default {
  components: {
    Logo,
    Navigation
  },
  computed: {
    user() {
      return this.$store.getters['user/getUser']
    }
  }
}
</script>

<style>
.nav {
  margin-bottom: 10%;
}

.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
