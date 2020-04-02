<template>
  <v-card class="post-upload pa-2">
    <v-card-actions>
      <v-container>
        <post-images-upload v-model="images" />
        <v-text-field
          v-model="post.caption"
          class="mt-5"
          color="yellow darken-3"
          label="Caption"
          prepend-icon="fas fa-closed-captioning"
          outlined
        ></v-text-field>
      </v-container>
    </v-card-actions>
  </v-card>
</template>

<script>
import PostImagesUpload from '@/components/post/PostImagesUpload.vue'

export default {
  name: 'PostContentUpload',
  components: {
    'post-images-upload': PostImagesUpload
  },
  data() {
    return {
      post: {
        caption: '',
        images: []
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.post-upload {
  margin-top: 5vh;
}
</style>
