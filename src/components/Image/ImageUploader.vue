<template v-if="target">
  <div class="image-uploader"></div>
</template>

<script>
export default {
  name: 'ImageUploader',
  props: {
    target: {
      type: String,
      default: null
    }
  },
  methods: {
    upload() {}
  }
}
</script>

<style lang="scss" scoped></style>
