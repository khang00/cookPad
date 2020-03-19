<template>
  <div class="users-viewer">
    <user-card v-for="(user, index) in users" :key="index" :user="user" />
  </div>
</template>

<script>
import UserCard from '@/components/user/UserCard.vue'
export default {
  name: 'UsersViewer',
  components: {
    'user-card': UserCard
  },
  computed: {
    users() {
      return this.$store.getters['userSearchedList/getUsers']
    }
  },
  mounted() {
    this.$store.dispatch('userSearchedList/retriveUsers')
  }
}
</script>

<style lang="scss" scoped>
.users-viewer {
  margin-top: 3vh;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 1vw;
}
</style>
