<template v-if="this.post">
  <v-card
    class="user-card mx-auto"
    width="18vw"
    :to="{ path: '/post/' + post.id, query: { post: post } }"
    outlined
  >
    <v-list-item>
      <v-list-item-avatar color="grey">
        <v-img :src="post.postOwnerPhotoUrl"></v-img>
      </v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title class="headline">{{
          post.postOwnerName
        }}</v-list-item-title>
        <v-list-item-subtitle>{{ post.caption }}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
    <v-img
      class="white--text align-end"
      height="200"
      :src="post.imgMain[0]"
    ></v-img>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn icon color="yellow darken-4">
        <v-icon>fas fa-bookmark</v-icon>
      </v-btn>
      <v-btn icon color="yellow darken-4">
        <v-icon>fas fa-heart</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'PostCard',
  props: {
    post: {
      type: Object,
      default: null
    }
  }
}
</script>
