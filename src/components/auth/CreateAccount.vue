<template>
  <v-card class="create-wrapper" elevation="6" color="yellow darken-3" dark>
    <v-card-title class="headline">Create Account</v-card-title>
    <v-text-field
      v-model="email"
      :outlined="true"
      :filled="true"
      type="email"
      label="Email"
    />
    <v-text-field
      v-model="password"
      :filled="true"
      :outlined="true"
      type="password"
      label="Password"
    />
    <v-text-field
      v-model="repassword"
      :filled="true"
      :outlined="true"
      type="password"
      label="Confirm Password"
    />
    <v-btn :loading="loading" outlined @click="createAccount"
      >Create Account</v-btn
    >
  </v-card>
</template>

<script>
export default {
  name: 'CreateAccount',
  data() {
    return {
      email: '',
      password: '',
      repassword: '',
      error: '',
      loading: false
    }
  },
  methods: {
    createAccount() {
      if (this.email === this.password) {
        this.loading = true
        this.$store
          .dispatch('user/createAccount', {
            email: this.email,
            password: this.password
          })
          .then(() => {
            this.$router.push('/')
          })
          .catch((error) => {
            this.error = error
          })
      } else {
        this.loading = false
        this.error = 'Password is not the same'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.create-wrapper {
  height: 59vh;
  padding: 2vw;
  button {
    width: 100%;
  }
}
</style>
