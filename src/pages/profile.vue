<template>
  <div class="profile">
    <user-display />
  </div>
</template>

<script>
import UserDisplay from '../components/UserDisplay.vue'
export default {
  name: 'Profile',
  components: {
    'user-display': UserDisplay
  }
}
</script>

<style lang="scss" scoped></style>
