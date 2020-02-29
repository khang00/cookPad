<template>
  <div>
    {{ error }}
    <input v-model="email" type="email" />
    {{ email }}
    <input v-model="password" type="password" />
    {{ password }}
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
