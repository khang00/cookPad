<template>
  <div class="profile-intro">
    <v-dialog
      v-model="edit"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <v-card>
        <v-toolbar dark color="yellow darken-3" flat>
          <v-btn icon dark @click="edit = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>Edit Personal Information</v-toolbar-title>
        </v-toolbar>
        <info-editor />
      </v-card>
    </v-dialog>

    <v-card :flat="true" :tile="true" class="intro-view">
      <div class="filter"></div>
      <v-avatar class="avatar" size="12vw">
        <v-img :src="photoUrl"></v-img>
      </v-avatar>
      <div class="public-info">
        <p v-for="(value, name) in userPublicInfo" :key="name" :class="name">
          <b v-if="name === 'followers' || name === 'following'">{{ value }}</b>
          <span v-else>{{ value }}</span>
          {{ name === 'followers' || name === 'following' ? name : '' }}
        </p>
        <v-btn
          v-if="user.userId"
          class="edit white--text"
          color="yellow darken-3"
          @click="edit = !edit"
          >Edit Profile</v-btn
        >
      </div>
    </v-card>
  </div>
</template>

<script>
import UserInfoEditor from '@/components/user/UserInfoEditor.vue'

export default {
  name: 'UserInfo',
  components: {
    'info-editor': UserInfoEditor
  },
  props: {
    userInfo: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  data() {
    return {
      edit: false,
      infoEdited: { ...this.userInfo }
    }
  },
  computed: {
    user() {
      return this.$store.getters['user/getUser']
    },
    userPublicInfo() {
      const infos = { ...this.userInfo }
      delete infos.email
      delete infos.phone
      delete infos.photoUrl
      return infos
    },
    photoUrl() {
      return this.userInfo.photoUrl
    }
  }
}
</script>

<style lang="scss" scoped>
.intro-view {
  padding: 3vh 0%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  border-style: solid none !important;
  border-bottom: 2px #e1e1e1;

  .avatar {
    margin: 0% 4vw;
    :hover {
      cursor: pointer;
    }
  }
  .public-info {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;

    .displayName {
      order: 1;
      grid-column: 1 / span 3;
      align-self: start;
      font-family: Roboto;
      font-size: 28px;
      font-weight: 300;
    }
    .followers {
      align-self: start;
      order: 2;
    }
    .following {
      align-self: start;
      order: 3;
    }
    .bio {
      align-self: start;
      order: 4;
      grid-column: 1 / span 3;
    }
    .edit {
      align-self: start;
      grid-column: 1 / span 3;
      order: 5;
    }
  }
  /* for the v-avatar to not lose border radius */
  .filter {
    display: none;
  }
}
</style>
