<template>
  <v-card v-if="isPost" class="post-upload pa-2">
    <v-card-actions>
      <v-container>
        <div class="post-images-wrapper">
          <v-card-actions>
            <v-file-input
              v-model="newPost.images"
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
                <v-chip
                  v-if="index < 4"
                  color="yellow darken-3"
                  dark
                  label
                  small
                >
                  {{ text }}
                </v-chip>

                <span
                  v-else-if="index === 4"
                  class="overline grey--text text--darken-3 mx-2"
                >
                  +{{ newPost.images.length - 4 }} File(s)
                </span>
              </template>
            </v-file-input>
          </v-card-actions>
          <v-card-actions>
            <v-carousel
              v-if="newPost.images && newPost.images.length > 0"
              cycle
              :show-arrows="false"
              hide-delimiter-background
            >
              <v-carousel-item
                v-for="(image, index) in newPost.images"
                :key="index"
                :src="convertImageToUrl(image)"
                width="60vw"
                contain
              >
              </v-carousel-item>
            </v-carousel>
          </v-card-actions>
        </div>
        <v-text-field
          v-model="newPost.name"
          class="mt-5"
          color="yellow darken-3"
          label="Dish Name"
          prepend-icon="fas fa-closed-captioning"
          outlined
        ></v-text-field>
        <v-text-field
          v-model="newPost.description"
          class="mt-5"
          color="yellow darken-3"
          label="Description"
          prepend-icon="fas fa-closed-captioning"
          outlined
        ></v-text-field>
        <v-combobox
          v-model="newPost.mainIngredients"
          :items="existedIngredients"
          color="yellow darken-3"
          label="Your main ingredients"
          prepend-icon="fas fa-carrot"
          chips
          multiple
          outlined
        >
          <template v-slot:selection="{ attrs, item, select, selected }">
            <v-chip
              v-bind="attrs"
              :input-value="selected"
              color="yellow darken-3"
              class="white--text"
              close
              @click="select"
              @click:close="remove(item)"
            >
              <strong>{{ item }}</strong>
            </v-chip>
          </template>
        </v-combobox>
        <v-textarea
          v-model="newPost.subIngredients"
          class="mt-5"
          color="yellow darken-3"
          label="Additional Ingredients"
          prepend-icon="fas fa-carrot"
          outlined
        ></v-textarea>
        <v-btn
          class="white--text ma-2"
          color="yellow darken-3"
          block
          @click="uploadPost"
          >Upload Dish</v-btn
        >
      </v-container>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'PostContentUpload',
  props: {
    post: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      newPost: { ...this.post }
    }
  },
  computed: {
    isPost() {
      return this.newPost !== null
    },
    existedIngredients() {
      const ingredients = ['meat', 'veggies', 'salt', 'sugar']
      return ingredients
    }
  },
  methods: {
    uploadPost() {
      this.$emit('postDish', this.newPost)
    },
    convertImageToUrl(image) {
      return URL.createObjectURL(image)
    }
  }
}
</script>

<style lang="scss" scoped>
.post-upload {
  margin-top: 5vh;
}
</style>
