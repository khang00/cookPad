<template>
  <div v-if="userInfo" class="user-view">
    <profile-banner :banners="bannerUrl" />
    <profile-intro :infos="introInfo" />
  </div>
</template>

<script>
import ProfileIntro from '@/components/user/ProfileIntro.vue'
import ProfileBanner from '@/components/user/ProfileBanner.vue'

export default {
  name: 'UserView',
  components: {
    'profile-intro': ProfileIntro,
    'profile-banner': ProfileBanner
  },
  computed: {
    userInfo() {
      return this.$store.getters['userInfo/getInfo']
    },
    introInfo() {
      const introInfo = { ...this.userInfo }
      delete introInfo.avtUrl
      delete introInfo.backgroundUrl
      return introInfo
    },
    bannerUrl() {
      const bannerUrl = {
        avtUrl: this.userInfo.avtUrl,
        backgroundUrl: this.userInfo.backgroundUrl
      }
      console.log(bannerUrl)
      return bannerUrl
    }
  }
}
</script>

<style lang="scss" scoped></style>
