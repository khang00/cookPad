<template>
  <div class="post-images-wrapper">
    <v-card-actions>
      <v-file-input
        v-model="images"
        color="yellow darken-3"
        counter
        label="Image input"
        accept="image/*"
        multiple
        placeholder="Select your dish images"
        prepend-icon="fas fa-camera"
        outlined
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
            +{{ images.length - 4 }} File(s)
          </span>
        </template>
      </v-file-input>
    </v-card-actions>
    <v-card-actions>
      <v-carousel
        v-if="images && images.length > 0"
        cycle
        :show-arrows="false"
        hide-delimiter-background
      >
        <v-carousel-item
          v-for="(image, index) in images"
          :key="index"
          :src="convertImageToUrl(image)"
          width="60vw"
          contain
        >
        </v-carousel-item>
      </v-carousel>
    </v-card-actions>
  </div>
</template>

<script>
export default {
  name: 'PostImagesUpload',
  props: {
    images: {
      type: Array,
      default: null
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
