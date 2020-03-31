<template>
  <div class="post-upload">
    <v-divider vertical inset></v-divider>
    <v-card-title>A description for your dish</v-card-title>
    <v-card-actions>
      <v-text-field
        v-model="post.caption"
        color="yellow darken-3"
        label="Caption"
        prepend-icon="fas fa-closed-captioning"
        outlined
      ></v-text-field>
    </v-card-actions>
  </div>
</template>

<script>
export default {
  name: 'PostContentUpload',
  data() {
    return {
      post: {
        caption: ''
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
