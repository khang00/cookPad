<template>
  <div class="post-upload-wrapper">
    <post-upload />
  </div>
</template>

<script>
import PostUpload from '@/components/post/PostUpload.vue'
export default {
  name: 'PostUpload',
  components: {
    'post-upload': PostUpload
  }
}
</script>

<style lang="scss" scoped></style>
