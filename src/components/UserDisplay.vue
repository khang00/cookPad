<template>
  <div class="user-display">
    {{ UserInfo }}
  </div>
</template>

<script>
export default {
  name: 'UserDisplay',
  computed: {
    User() {
      return this.$store.getters['user/getUser']
    },
    UserInfo() {
      return this.$store.getters['userInfo/getInfo']
    }
  }
}
</script>

<style lang="sass" scoped></style>
