<template>
  <div class="user-edit">
    <v-btn @click="finishEdit">Finish</v-btn>
  </div>
</template>

<script>
export default {
  name: 'UserEdit',
  computed: {
    userInfo() {
      return this.$store.getters['userInfo/getInfo']
    }
  },
  methods: {
    finishEdit() {}
  }
}
</script>

<style lang="scss" scoped></style>
