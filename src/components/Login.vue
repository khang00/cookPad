<template v-if="typeof user == 'null'">
  <div class="login">
    <input v-model="email" type="email" />
    <input v-model="password" type="password" />
    <button v-for="item in types" :key="item" @click="login(item)">
      {{ item }}
    </button>
  </div>
</template>

<script>
export default {
  name: 'Login',
  props: {
    types: []
  },
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
