<template>
  <div class="navigation">
    <v-app-bar color="yellow darken-3 absolute" dark absolute app flat>
      <v-btn icon to="/">
        <v-avatar>
          <v-img :src="require('~/static/icon.png')"></v-img>
        </v-avatar>
      </v-btn>
      <v-toolbar-title class="title mr-6 hidden-sm-and-down" @click="comeHome">
        CheftPad
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <v-container v-if="userInfo !== null" class="nav">
        <v-btn icon to="/profile">
          <v-avatar>
            <v-img :src="userInfo.photoUrl"></v-img>
          </v-avatar>
        </v-btn>
        <v-btn
          v-for="route in userRoutes"
          :key="route.name"
          :to="route.link"
          icon
        >
          <v-icon>{{ route.icon }}</v-icon>
        </v-btn>
        <v-btn icon @click="logout">
          <v-icon>fas fa-power-off</v-icon>
        </v-btn>
      </v-container>

      <v-container v-else class="nav">
        <v-btn
          v-for="route in guestRoutes"
          :key="route.name"
          :to="route.link"
          icon
        >
          <v-icon>{{ route.icon }}</v-icon>
        </v-btn>
      </v-container>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: 'Navigation',
  data() {
    return {
      guestRoutes: [
        {
          icon: 'fas fa-home',
          name: 'Home',
          link: '/'
        },
        {
          icon: 'fas fa-sign-in-alt',
          name: 'Login',
          link: '/Login'
        }
      ],
      userRoutes: [
        {
          icon: 'fas fa-home',
          name: 'Home',
          link: '/'
        },
        {
          icon: 'fas fa-comment',
          name: 'Chat',
          link: '/login'
        },
        {
          icon: 'fas fa-bell',
          name: 'Notification',
          link: '/login'
        },
        {
          icon: 'fas fa-plus-circle',
          name: 'Upload Post',
          link: '/postUpload'
        }
      ]
    }
  },
  computed: {
    userInfo() {
      return this.$store.getters['userInfo/getInfo']
    }
  },
  methods: {
    logout() {
      this.$store
        .dispatch('user/logout')
        .then(() => {
          this.$router.push('/')
        })
        .catch((error) => {
          this.error = error
        })
    },
    comeHome() {
      this.$router.push('/')
    }
  }
}
</script>

<style lang="scss" scoped>
.navigation {
  height: 100vh;
  .nav {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;

    > * {
      margin-left: 8px;
    }
  }
  .title {
    cursor: pointer;
  }
  .icon {
    cursor: pointer;
  }
}
</style>
