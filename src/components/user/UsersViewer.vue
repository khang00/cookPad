<template>
  <div class="users-viewer">
    <user-card
      v-for="(user, index) in filteredUser"
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
      type: String,
      default: ''
    }
  },
  computed: {
    users() {
      return this.$store.getters['userSearchedList/getUsers']
    },
    filteredUser() {
      console.log(this.filter)
      if (this.filter.type === 'email') {
      }
      if (this.filter.type === 'name') {
      }
      return this.users
    }
  },
  mounted() {
    this.$store.dispatch('userSearchedList/retriveUsers')
  },
  methods: {
    filteredUserByName() {},
    filteredUserByEmail() {}
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
