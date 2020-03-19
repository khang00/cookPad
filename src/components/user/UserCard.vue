<template v-if="this.user">
  <v-card class="user-card" outlined>
    <v-list-item>
      <v-list-item-avatar>
        <v-img :src="user.photoUrl"></v-img>
      </v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title class="title">{{
          user.displayName
        }}</v-list-item-title>
        <v-list-item-subtitle>{{ user.bio }}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
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
