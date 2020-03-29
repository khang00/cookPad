<template>
  <div class="post-upload">
    <v-card class="post-content-input" outlined>
      <post-images-upload />
      <v-divider vertical inset></v-divider>
      <v-card-title>Make A Dish</v-card-title>
      <v-card-actions>
        <v-form class="form">
          <v-text-field
            v-model="post.caption"
            color="yellow darken-3"
            label="Dish Name"
            placeholder="Caption"
            outlined
          ></v-text-field>
        </v-form>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import PostImagesUpload from '@/components/post/PostImagesUpload.vue'
export default {
  name: 'PostUpload',
  components: {
    'post-images-upload': PostImagesUpload
  },
  data() {
    return {
      post: {
        caption: '',
        steps: []
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
