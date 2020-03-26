<template>
  <div class="profile-intro">
    <v-dialog
      v-if="user"
      v-model="edit"
      max-width="75vw"
      transition="dialog-bottom-transition"
      :scrollable="true"
    >
      <v-card width="100%">
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
      <v-avatar class="avatar" size="11vw">
        <v-img :src="photoUrl"></v-img>
      </v-avatar>
      <div class="public-info">
        <div v-for="(value, name) in userPublicInfo" :key="name" :class="name">
          <p
            v-if="
              name === 'followers' || name === 'followings' || name === 'posts'
            "
          >
            {{ name }} <b>{{ value.length }}</b>
          </p>
          <p v-else>{{ value }}</p>
        </div>
        <v-btn
          v-if="user && user.userId"
          class="edit white--text"
          color="yellow darken-3"
          depressed
          @click="edit = !edit"
          >Edit Profile</v-btn
        >
        <v-btn
          v-else
          class="edit white--text"
          color="yellow darken-3"
          depressed
          @click="follow"
          >follow</v-btn
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
      delete infos.uid
      return infos
    },
    photoUrl() {
      return this.userInfo.photoUrl
    }
  },
  methods: {
    follow() {}
  }
}
</script>

<style lang="scss" scoped>
.intro-view {
  padding: 3vh 0%;
  display: flex;
  border-style: solid none !important;
  border-bottom: 2px #e1e1e1;

  .avatar {
    margin: 0% 4.5vw;
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
    .posts {
      align-self: start;
      order: 2;
    }
    .followers {
      align-self: start;
      order: 3;
    }
    .followings {
      align-self: start;
      order: 4;
    }
    .bio {
      word-wrap: break-word;
      overflow: hidden;
      align-self: start;
      order: 5;
      grid-column: 1 / span 3;
    }
    .edit {
      align-self: start;
      grid-column: 1 / span 3;
      order: 6;
    }
  }
  /* for the v-avatar to not lose border radius */
  .filter {
    display: none;
  }
}
</style>
