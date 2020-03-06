<template>
  <div class="profile-intro">
    <v-dialog
      v-model="imageCropper"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <v-card>
        <v-toolbar dark color="yellow darken-3" flat>
          <v-btn icon dark @click="imageCropper = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>Image Upload</v-toolbar-title>
        </v-toolbar>

        <v-list>
          <v-list-item>
            <avatar-cropper @close="imageCropper = false" />
          </v-list-item>
        </v-list>
      </v-card>
    </v-dialog>

    <v-card :flat="true" :tile="true" class="intro-view">
      <div class="filter"></div>
      <v-avatar class="avatar" size="12vw" @click="imageCropper = true">
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
          :block="true"
          class="edit white--text"
          :outlined="true"
          color="yellow darken-3"
          @click="editInfo"
          >Edit Profile</v-btn
        >
      </div>
    </v-card>
  </div>
</template>

<script>
import imageCropper from '@/components/Image/ImageCropper.vue'

export default {
  name: 'UserInfo',
  components: {
    'avatar-cropper': imageCropper
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
      imageCropper: false,
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
  },
  methods: {
    editInfo() {
      return 0
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
