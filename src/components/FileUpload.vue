<template>
  <div class="file-upload">
    <input type="file" @change="addFile" />
    <v-btn @click="uploadFiles">Upload File</v-btn>
  </div>
</template>

<script>
export default {
  name: 'FileUpload',
  data() {
    return {
      files: []
    }
  },
  methods: {
    addFile(e) {
      for (let i = 0; i < e.target.files.length; ++i) {
        this.files.push(e.target.files[i])
      }
    },
    uploadFiles() {
      this.$store.dispatch('user/uploadAvatar', this.files[0])
    }
  }
}
</script>

<style lang="sass" scoped></style>
