<template>
  <div class="post-view-wrapper">
    <v-card>
      <v-carousel cycle :show-arrows="false" hide-delimiter-background>
        <v-carousel-item
          v-for="(image, index) in post.imgMain"
          :key="index"
          :src="image"
          width="60vw"
          contain
        >
        </v-carousel-item>
      </v-carousel>
      <v-card-title class="headline"> {{ post.caption }}</v-card-title>
      <v-card-text> {{ post.decription }} </v-card-text>
      <v-card-title class="headline"> Ingredients </v-card-title>
      <v-card-text> {{ post.MainIngredient }} </v-card-text>
      <v-card-text> {{ post.Ingredients }} </v-card-text>
    </v-card>
    {{ steps }}
    {{ iniSteps }}
    {{ post }}
  </div>
</template>

<script>
import { getPostStep } from '../../plugins/lib/postsAssist.js'
export default {
  name: 'ViewPost',
  data() {
    return {
      steps: {}
    }
  },
  computed: {
    post() {
      return this.$route.query.post
    },
    iniSteps() {
      return this.getStep()
    }
  },
  methods: {
    getStep() {
      getPostStep(this.post.ownerUid, this.$route.params.id).then((stepRef) => {
        stepRef.forEach((doc) => {
          console.log(doc)
          console.log(doc.data())
          this.steps = doc.data()
        })
      })
      return 0
    }
  }
}
</script>

<style lang="scss" scoped>
.post-view-wrapper {
  margin-top: 3vh;

  .step {
    margin: 5vh 0vh;
  }
}
</style>
