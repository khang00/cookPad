<template>
  <div class="file-upload">
    <input type="file" @change="addFile" />
    <button @click="uploadFiles">Upload File</button>
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
      console.log(e.target.files[0])
      for (let i = 0; i < e.target.files.length; ++i) {
        this.files.push(e.target.files[i])
      }
    },
    uploadFiles() {
      this.$store.dispatch('user/uploadAvatar', this.files[0]).then(() => {
        console.log('okay then')
      })
    }
  }
}
</script>

<style lang="sass" scoped></style>
