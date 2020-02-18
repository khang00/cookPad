<template v-if="typeof user == 'null'">
  <div class="login">
    <input v-model="email" type="email" />
    {{ email }}
    <input v-model="password" type="password" />
    {{ password }}
    <button @click="login('normal')">Login</button>
    <button @click="login('google')">Login With Google</button>
    <button @click="login('facebook')">Login With Facebook</button>
    {{ error }}
    {{ user }}
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      email: '',
      password: '',
      error: ''
    }
  },
  computed: {
    user() {
      return this.$store.getters['user/getUser']
    }
  },
  methods: {
    login(type) {
      this.$store
        .dispatch('user/login', {
          email: this.email,
          password: this.password,
          type
        })
        .then(() => {
          this.$router.push('/')
        })
        .catch((error) => {
          this.error = error
        })
    }
  }
}
</script>

<style lang="sass" scoped></style>
