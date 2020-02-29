<template>
  <div class="message">
    <input v-model="message" type="text" />
    <v-btn @click="sendMessage">send</v-btn>
    {{ message }}
  </div>
</template>

<script>
export default {
  name: 'Message',
  data() {
    return {
      message: ''
    }
  },
  methods: {
    sendMessage() {}
  }
}
</script>

<style lang="scss" scoped></style>
