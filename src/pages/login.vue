<template>
  <div class="wrapper">
    <login :types="['Google', 'Facebook', 'Twitter', 'Github']" />
    <create-account />
  </div>
</template>

<script>
import Login from '@/components/auth/Login.vue'
import CreateAccount from '@/components/auth/CreateAccount.vue'
export default {
  name: 'Login',
  components: {
    login: Login,
    'create-account': CreateAccount
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  display: grid;
  height: 100vh;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1vh 2vw;
  align-items: center;
}
</style>
