<template>
  <div class="post-images-wrapper">
    <v-card-title>Change Your Avatar</v-card-title>
    <v-card-actions>
      <v-file-input
        v-model="postImages"
        color="yellow darken-3"
        counter
        label="Image input"
        accept="image/*"
        multiple
        placeholder="Select your post images"
        prepend-icon="fas fa-camera"
        outlined
        :success="avtUpdate"
        :clearable="false"
        :show-size="1000"
      >
        <template v-slot:selection="{ index, text }">
          <v-chip v-if="index < 4" color="yellow darken-3" dark label small>
            {{ text }}
          </v-chip>

          <span
            v-else-if="index === 4"
            class="overline grey--text text--darken-3 mx-2"
          >
            +{{ postImages.length - 4 }} File(s)
          </span>
        </template>
      </v-file-input>
    </v-card-actions>
    <v-carousel cycle>
      <v-carousel-item
        v-for="(image, index) in postImages"
        :key="index"
        :src="convertImageToUrl(image)"
        width="60vw"
        contain
      >
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
export default {
  name: 'PostImagesUpload',
  data() {
    return {
      postImages: null
    }
  },
  methods: {
    convertImageToUrl(image) {
      return URL.createObjectURL(image)
    }
  }
}
</script>

<style></style>
