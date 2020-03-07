<template v-if="userInfo">
  <div class="user-editor">
    <div class="avt-editor mr-3">
      <v-card-title>Change Your Avatar</v-card-title>
      <v-card-actions>
        <v-file-input
          v-model="newAvatar"
          color="yellow darken-3"
          counter
          label="Image input"
          accept="image/*"
          multiple
          placeholder="Select your new avatar"
          prepend-icon="mdi-paperclip"
          outlined
          :success="avtUpdate"
          :clearable="false"
          :show-size="1000"
        >
          <template v-slot:selection="{ index, text }">
            <v-chip v-if="index < 2" color="yellow darken-3" dark label small>
              {{ text }}
            </v-chip>

            <span
              v-else-if="index === 2"
              class="overline grey--text text--darken-3 mx-2"
            >
              +{{ newAvatar.length - 2 }} File(s)
            </span>
          </template>
        </v-file-input>
      </v-card-actions>
      <v-card
        v-if="newAvatar"
        max-height="50%"
        class="ma-3 pa-2"
        outlined
        hover
      >
        <v-card-actions>
          <v-responsive :aspect-ratio="1">
            <v-img
              max-height="50%"
              :aspect-ratio="1"
              :src="displayImage"
              contain
            >
            </v-img>
            <v-btn
              class="mt-6 ml-6 white--text"
              color="yellow darken-3"
              width="90%"
              :loading="loadingAvt"
              @click="updateAvatar()"
            >
              Upload Image
            </v-btn>
          </v-responsive>
        </v-card-actions>
      </v-card>
    </div>
    <v-divider vertical></v-divider>
    <div class="info-editor mr-3">
      <v-card-title>Change Your Information</v-card-title>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserInfoEditor',
  data() {
    return {
      newInfo: {},
      newAvatar: null,
      loadingAvt: false,
      loadingInfo: false,
      infoUpdate: false,
      avtUpdate: false
    }
  },
  computed: {
    userInfo() {
      return this.$store.getters['userInfo/getInfo']
    },
    displayImage() {
      return URL.createObjectURL(this.newAvatar[0])
    }
  },
  methods: {
    updateInfo() {
      this.loadingInfo = true
      this.$store.dispatch('userInfo/updateInfo', this.newInfo).then(() => {
        this.loadingInfo = false
        this.infoUpdate = true
      })
    },
    updateAvatar() {
      this.loadingAvt = true
      this.$store.dispatch('userInfo/uploadAvt', this.newAvatar[0]).then(() => {
        this.loadingAvt = false
        this.avtUpdate = true
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.user-editor {
  display: flex;

  .avt-editor {
    width: 49.5%;
  }
  .info-editor {
    width: 49.5%;
  }
}
</style>
