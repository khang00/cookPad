<template>
  <div>
    <v-text-field v-model="email" type="email" :outlined="true" label="Email" />
    <v-text-field
      v-model="password"
      type="password"
      :outlined="true"
      label="Email"
    />
    <v-text-field
      v-model="repassword"
      type="password"
      :outlined="true"
      label="Email"
    />
    <v-btn @click="createAccount">Create Account</v-btn>
  </div>
</template>

<script>
export default {
  name: 'CreateAccount',
  data() {
    return {
      email: '',
      password: '',
      repassword: '',
      error: ''
    }
  },
  methods: {
    createAccount() {
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
    }
  }
}
</script>

<style lang="scss" scoped></style>
