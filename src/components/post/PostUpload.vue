<template>
  <div class="post-upload">
    <v-card class="post-content-input" outlined>
      <v-divider vertical inset></v-divider>
      <v-card-title>Make A Dish</v-card-title>
      <v-card-actions>
        <v-form class="form">
          <v-text-field
            v-model="post.name"
            color="yellow darken-3"
            label="Dish Name"
            placeholder="Your dish name"
            outlined
          ></v-text-field>
          <v-textarea
            v-model="post.subMaterial"
            color="yellow darken-3"
            label="Dish Sub Material"
            placeholder="Your additional material"
            outlined
          ></v-textarea>
        </v-form>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'PostUpload',
  data() {
    return {
      post: {
        steps: []
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
