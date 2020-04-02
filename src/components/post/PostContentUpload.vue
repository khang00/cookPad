<template>
  <v-card class="post-upload pa-2">
    <v-card-actions>
      <v-container>
        <post-images-upload v-model="images" />
        <v-text-field
          v-model="post.caption"
          class="mt-5"
          color="yellow darken-3"
          label="Caption"
          prepend-icon="fas fa-closed-captioning"
          outlined
        ></v-text-field>
        <ingredient-chooser v-model="mainIngredients" />
        <v-textarea
          v-model="post.subIngredients"
          class="mt-5"
          color="yellow darken-3"
          label="Additional Ingredients"
          prepend-icon="fas fa-carrot"
          outlined
        ></v-textarea>
      </v-container>
    </v-card-actions>
  </v-card>
</template>

<script>
import PostImagesUpload from '@/components/post/PostImagesUpload.vue'
import IngredientsChooser from '@/components/post/IngredientsChooser.vue'

export default {
  name: 'PostContentUpload',
  components: {
    'post-images-upload': PostImagesUpload,
    'ingredient-chooser': IngredientsChooser
  },
  data() {
    return {
      post: {
        caption: '',
        images: [],
        mainIngredients: [],
        subIngredients: ''
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.post-upload {
  margin-top: 5vh;
}
</style>
