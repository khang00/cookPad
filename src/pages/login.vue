<template>
  <div class="wrapper">
    <login :types="['Login', 'Google', 'Facebook']" />
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

<style lang="scss" scoped></style>
