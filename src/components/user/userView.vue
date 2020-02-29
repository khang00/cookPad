<template>
  <div v-if="userInfo" class="user-view">
    <v-card
      :img="userInfo.backgroundUrl"
      class="mx-auto"
      height="33vh"
      max-width="100%"
    >
      <v-avatar>
        <v-img :src="userInfo.avtUrl" />
      </v-avatar>
    </v-card>
    <intro :infos="introInfo" />
  </div>
</template>

<script>
import intro from './intro.vue'
import isValidUrl from '@/plugins/lib/url.js'

export default {
  name: 'UserView',
  components: {
    intro
  },
  computed: {
    userInfo() {
      return this.$store.getters['userInfo/getInfo']
    },
    introInfo() {
      const introInfo = {}
      for (const [key, value] of Object.entries(this.userInfo)) {
        if (isValidUrl(value)) {
          continue
        }
        introInfo[key] = value
      }
      return introInfo
    }
  }
}
</script>

<style lang="scss" scoped></style>
