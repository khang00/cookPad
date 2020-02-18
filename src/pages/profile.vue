<template>
  <div class="profile">
    <file-upload />
  </div>
</template>

<script>
import FileUpload from '../components/FileUpload.vue'
export default {
  name: 'Profile',
  components: {
    'file-upload': FileUpload
  }
}
</script>

<style lang="scss" scoped></style>
