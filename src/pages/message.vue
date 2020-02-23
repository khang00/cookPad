<template>
  <div class="message">
    <input v-model="message" type="text" />
    <button @click="sendMessage">send</button>
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
