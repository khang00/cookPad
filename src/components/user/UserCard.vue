<template v-if="this.user">
  <v-card class="user-card mx-auto" width="18vw" outlined>
    <v-img class="white--text align-end" height="200px" :src="user.photoUrl">
    </v-img>
    <v-card-title>{{ user.displayName }}</v-card-title>
    <v-card-text>{{ user.bio }}</v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'UserCard',
  props: {
    user: {
      type: Object,
      default: null
    }
  }
}
</script>

<style lang="scss" scoped></style>
