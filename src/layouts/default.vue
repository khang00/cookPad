<template>
  <v-app>
    <div class="applicaiton-wrapper">
      <navigation />
      <nuxt class="main-wrapper" />
    </div>
  </v-app>
</template>

<script>
import Navigation from '@/components/Navigation.vue'
export default {
  components: {
    navigation: Navigation
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Open+Sans|Roboto&display=swap');
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

.applicaiton-wrapper {
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
}
</style>
