<template v-if="typeof user == 'null'">
  <div class="login">
    <v-text-field v-model="email" :outlined="true" label="Email" type="email" />
    <v-text-field
      v-model="password"
      :outlined="true"
      label="Password"
      type="password"
    />
    <v-btn
      v-for="item in types"
      :key="item"
      :outlined="true"
      color="green lighten-1"
      @click="login(item)"
      >{{ item }}</v-btn
    >
  </div>
</template>

<script>
export default {
  name: 'Login',
  props: {
    types: {
      type: Array,
      default: () => ['Login']
    }
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
