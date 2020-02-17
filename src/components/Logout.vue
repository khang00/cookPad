<template>
  <div v-if="isLogin">
    {{ isLogin }}
    <button @click="logout">Logout</button>
  </div>
</template>

<script>
export default {
  name: 'Logout',
  data() {
    return {
      error: ''
    }
  },
  computed: {
    isLogin() {
      return this.$store.getters['user/getUser'] != null
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

<style lang="scss" scoped></style>
