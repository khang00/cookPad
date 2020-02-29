<template>
  <div class="profile-banner">
    <v-card
      :img="banners.backgroundUrl"
      class="mx-auto"
      height="33vh"
      max-width="100%"
    >
      <v-avatar>
        <v-img :src="banners.avtUrl" />
      </v-avatar>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'ProfileBanner',
  props: {
    banners: {
      type: Object,
      default: null
    }
  }
}
</script>

<style></style>
