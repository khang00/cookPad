<template>
  <a class="button--grey" @click="logout">Logout</a>
</template>

<script>
export default {
  name: 'Logout',
  data() {
    return {
      error: ''
    }
  },
  methods: {
    logout() {
      this.$store
        .dispatch('user/logout')
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

<style scoped></style>
