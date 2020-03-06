<template>
  <div v-if="images" class="image-cropper">
    <v-file-input
      v-model="images"
      color="yellow darken-3"
      counter
      label="Image input"
      accept="image/png, image/jpeg, image/jpg"
      multiple
      placeholder="Select your new avatar"
      prepend-icon="mdi-paperclip"
      outlined
      :clearable="false"
      :show-size="1000"
      @change="displayImage"
    >
      <template v-slot:selection="{ index, text }">
        <v-chip v-if="index < 2" color="yellow darken-3" dark label small>
          {{ text }}
        </v-chip>

        <span
          v-else-if="index === 2"
          class="overline grey--text text--darken-3 mx-2"
        >
          +{{ images.length - 2 }} File(s)
        </span>
      </template>
    </v-file-input>

    <div class="display-wrapper">
      <vue-cropper
        ref="cropper"
        :zoomable="false"
        :movable="false"
        :crop-box-resizable="false"
        :view-mode="3"
        :aspect-ratio="1 / 1"
        :src="imgSrc"
        preview=".preview"
      ></vue-cropper>
    </div>
    <v-btn
      v-if="Object.entries(images).length > 0"
      width="100%"
      color="yellow darken-3"
      class="white--text mt-3"
      flat
      @click="cropImage"
      >Upload</v-btn
    >
  </div>
</template>

<script>
import VueCropper from 'vue-cropperjs'
import 'cropperjs/dist/cropper.css'

export default {
  name: 'ImageCropper',
  components: {
    'vue-cropper': VueCropper
  },
  data() {
    return { images: {}, imgSrc: {} }
  },
  methods: {
    displayImage() {
      const file = this.images[0]

      if (typeof FileReader === 'function') {
        const reader = new FileReader()
        reader.onload = (event) => {
          this.imgSrc = event.target.result
          // rebuild cropperjs with the updated source
          this.$refs.cropper.replace(event.target.result)
        }
        reader.readAsDataURL(file)
      } else {
        alert('Sorry, FileReader API not supported')
      }
    },
    cropImage() {
      this.$refs.cropper.getCroppedCanvas().toBlob((image) => {
        this.$store.dispatch('userInfo/uploadAvt', image)
        this.$emit('close')
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.image-cropper {
  width: 100%;
  .display-wrappe {
    height: 10px;
  }
}
</style>
