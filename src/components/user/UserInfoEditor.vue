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
          prepend-icon="fas fa-camera"
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
      <v-card-actions v-if="newAvatar" class="image-viewer">
        <v-img width="40%" :aspect-ratio="1" :src="displayImage" contain>
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
      </v-card-actions>
    </div>
    <v-divider vertical inset></v-divider>
    <div class="info-editor mr-3 ml-3">
      <v-card-title>Change Your Information</v-card-title>
      <v-card-actions v-if="userInfo">
        <v-form class="form">
          <v-text-field
            v-model="newInfo.displayName"
            color="yellow darken-3"
            label="Your Name"
            :placeholder="userInfo.displayName"
            outlined
          ></v-text-field>
          <v-text-field
            v-model="newInfo.phone"
            :rules="[phoneValidator]"
            :error-messages="errorMessages"
            color="yellow darken-3"
            label="Your Phone"
            :placeholder="userInfo.phone"
            outlined
          ></v-text-field>
          <v-textarea
            v-model="newInfo.bio"
            color="yellow darken-3"
            label="Your Bio"
            :error-messages="errorMessages"
            :rules="[bioValidator]"
            :placeholder="userInfo.bio"
            :auto-grow="false"
            counter="100"
            outlined
          ></v-textarea>
          <v-btn
            :loading="loadingInfo"
            class="white--text"
            color="yellow darken-3"
            block
            @click="updateInfo"
            >Save</v-btn
          >
        </v-form>
      </v-card-actions>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserInfoEditor',
  data() {
    return {
      newInfo: {
        displayName: '',
        bio: '',
        phone: ''
      },
      errorMessages: '',
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
      const info = {}
      this.loadingInfo = true
      if (
        this.userInfo.displayName !== this.newInfo.displayName &&
        this.newInfo.displayName !== ''
      ) {
        info.displayName = this.newInfo.displayName
      }

      if (
        this.userInfo.phone !== this.newInfo.phone &&
        this.newInfo.phone !== ''
      ) {
        info.phone = this.newInfo.phone
      }

      if (this.userInfo.bio !== this.newInfo.bio && this.newInfo.bio !== '') {
        info.bio = this.newInfo.bio
      }
      console.log(info)
      this.$store.dispatch('userInfo/updateInfo', { info }).then(() => {
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
    },
    phoneValidator() {
      if (this.newInfo.phone.search(/[^0-9]+/gi) !== -1) {
        return 'This field must not contain characters'
      }
      return true
    },
    bioValidator() {
      return this.newInfo.bio.length < 100
        ? true
        : 'bio must be less than 100 words'
    }
  }
}
</script>

<style lang="scss" scoped>
$width-ratio: 100% * 1/3;

.user-editor {
  display: flex;
  width: 100%;
  height: 80vh;
  .avt-editor {
    width: $width-ratio * 2;

    .image-viewer {
      display: grid;
      height: 70%;
      grid-template-columns: 1fr;
      justify-items: center;
    }
  }
  .info-editor {
    width: $width-ratio;

    .form {
      width: 100%;
    }
  }
}
</style>
