<template>
  <div class="profile-intro">
    <v-card v-if="!edit" :flat="true" :tile="true" class="intro-view">
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
          v-if="!edit"
          :block="true"
          class="edit"
          :outlined="true"
          color="grey lighten-1"
          @click="editInfo"
          >Edit Profile</v-btn
        >
      </div>
    </v-card>

    <div v-if="edit" class="intro-edit">
      <div v-for="(value, name) in userInfo" :key="name">
        <v-text-field
          v-model="infoEdited[name]"
          :label="name"
          :outlined="true"
          :placeholder="value"
        />
      </div>
    </div>

    <v-btn
      v-if="edit"
      :outlined="true"
      color="green lighten-1"
      @click="finishEdit"
      >Finish</v-btn
    >
    <v-btn
      v-if="edit"
      :outlined="true"
      color="green lighten-1"
      @click="cancelEdit"
      >Cancel</v-btn
    >
  </div>
</template>

<script>
export default {
  name: 'UserInfo',
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
    userInfo() {
      return this.$store.getters['userInfo/getInfo']
    },
    userPublicInfo() {
      const infos = { ...this.$store.getters['userInfo/getInfo'] }
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
      this.edit = true
    },
    cancelEdit() {
      this.edit = false
    },
    finishEdit() {
      this.$store.dispatch('userInfo/updateInfo', {
        userId: this.user.userId,
        info: this.infoEdited
      })
      this.edit = false
    }
  }
}
</script>

<style lang="scss" scoped>
.intro-view {
  background: #fafafa;
  padding: 3vh 0%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  border-style: solid none !important;
  border-bottom: 2px #e1e1e1;

  .avatar {
    margin: 0% 4vw;
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
