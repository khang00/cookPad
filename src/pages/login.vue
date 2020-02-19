<template>
  <div class="wrapper">
    <login :types="['Login', 'Google', 'Facebook']" />
  </div>
</template>

<script>
import Login from '@/components/Login.vue'
export default {
  name: 'Login',
  components: {
    login: Login
  }
}
</script>

<style lang="scss" scoped></style>
