<template>
  <v-btn class="white--text" color="yellow darken-3" @click="logout"
    >Logout</v-btn
  >
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
