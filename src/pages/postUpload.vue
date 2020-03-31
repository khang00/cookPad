<template>
  <div class="post-upload-wrapper">
    <v-card class="pa-5">
      <v-card-title class="text-center">Making A New Dish</v-card-title>
      <post-upload />
      <post-images-upload />
    </v-card>
    <post-steps />
  </div>
</template>

<script>
import PostContentUpload from '@/components/post/PostContentUpload.vue'
import PostImagesUpload from '@/components/post/PostImagesUpload.vue'
import PostSteps from '@/components/post/PostSteps.vue'
export default {
  name: 'PostUpload',
  components: {
    'post-upload': PostContentUpload,
    'post-images-upload': PostImagesUpload,
    'post-steps': PostSteps
  },
  data() {
    return {
      totalSteps: 3
    }
  },
  methods: {
    addStep() {
      ++this.totalSteps
    }
  }
}
</script>

<style lang="scss" scoped>
.post-upload-wrapper {
  margin-top: 5vh;
}
</style>
