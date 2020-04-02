<template>
  <v-combobox
    v-model="ingredients"
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
</template>

<script>
export default {
  name: 'IngredientsChooser',
  props: {
    ingredients: {
      type: Array,
      default: null
    }
  },
  computed: {
    existedIngredients() {
      const ingredients = ['meat', 'veggies', 'salt', 'sugar']
      return ingredients
    }
  }
}
</script>

<style lang="scss" scoped></style>
