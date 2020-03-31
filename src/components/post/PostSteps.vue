<template>
  <div class="post-steps-wrapper">
    <post-step
      v-for="(step, index) in steps"
      :key="index"
      :order="index"
      :step="step"
      class="step"
    />
    <v-btn
      class="white--text ma-2"
      color="yellow darken-3"
      block
      @click="addStep"
    >
      Add Step
    </v-btn>
  </div>
</template>

<script>
import PostStep from '@/components/post/PostStep.vue'
export default {
  name: 'PostSteps',
  components: {
    'post-step': PostStep
  },
  data() {
    return {
      totalSteps: 3,
      stepModel: {
        content: '',
        image: null
      },
      steps: []
    }
  },
  mounted() {
    for (let i = 0; i < this.totalSteps; i++) {
      const step = { ...this.stepModel }
      this.steps.push(step)
    }
  },
  methods: {
    addStep() {
      ++this.totalSteps
      const step = { ...this.stepModel }
      this.steps.push(step)
    }
  }
}
</script>

<style lang="scss" scoped>
.post-steps-wrapper {
  .step {
    margin: 5vh 0vh;
  }
}
</style>
