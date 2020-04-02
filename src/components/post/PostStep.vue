<template>
  <v-card v-if="step" class="post-step pa-2">
    <v-card-title>Step {{ order + 1 }}</v-card-title>
    <v-card-actions>
      <v-container>
        <v-file-input
          v-model="step.image"
          color="yellow darken-3"
          counter
          label="Image input"
          accept="image/*"
          placeholder="Instruction Image"
          prepend-icon="fas fa-camera"
          outlined
          :clearable="false"
          :show-size="1000"
        >
          <template v-slot:selection="{ index, text }">
            <v-chip v-if="index < 2" color="yellow darken-3" dark label small>
              {{ text }}
            </v-chip>

            <span
              v-else-if="index === 2"
              class="overline grey--text text--darken-3 mx-2"
            >
              +{{ step.image.length - 2 }} File(s)
            </span>
          </template>
        </v-file-input>
        <v-img
          v-if="step.image"
          height="40vh"
          width="100%"
          :aspect-ratio="1"
          :src="displayImage"
          contain
        >
        </v-img>
        <v-textarea
          v-model="step.content"
          class="mt-5"
          color="yellow darken-3"
          label="Instruction"
          prepend-icon="fas fa-closed-captioning"
          outlined
        ></v-textarea>
      </v-container>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'PostStep',
  props: {
    order: {
      type: Number,
      default: null
    },
    step: {
      type: Object,
      default: null
    }
  },
  computed: {
    displayImage() {
      return URL.createObjectURL(this.step.image)
    }
  }
}
</script>

<style lang="scss" scoped>
.post-step {
  cursor: move;
}
</style>
