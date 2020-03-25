<template>
  <div class="users-viewer">
    <user-card
      v-for="(user, index) in filteredUsers"
      :key="index"
      :user="user"
    />
  </div>
</template>

<script>
import UserCard from '@/components/user/UserCard.vue'
export default {
  name: 'UsersViewer',
  components: {
    'user-card': UserCard
  },
  props: {
    filter: {
      type: Object,
      default: null
    }
  },
  computed: {
    users() {
      return this.$store.getters['userSearchedList/getUsers']
    },
    filteredUsers() {
      if (
        this.filter === null ||
        this.filter === {} ||
        this.filter.content === ''
      ) {
        return this.users
      }
      const filteredUsers = []
      this.users.forEach((user) => {
        if (this.filter.type === 'email') {
          if (this.filter.content === user.email) {
            filteredUsers.push(user)
          }
        } else if (user.displayName.includes(this.filter.content)) {
          filteredUsers.push(user)
        }
      })
      return filteredUsers
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
  grid-gap: 2vw;
}
</style>
