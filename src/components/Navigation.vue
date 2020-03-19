<template>
  <div class="navigation">
    <v-app-bar width="100%" color="yellow darken-3" dark absolute flat>
      <v-app-bar-nav-icon
        class="hidden-sm-and-down"
        @click="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <v-img
        class="mx-2 icon"
        :src="require('~/static/icon.png')"
        max-height="50"
        max-width="50"
        contain
        @click="comeHome"
      ></v-img>
      <v-toolbar-title class="title mr-6 hidden-sm-and-down" @click="comeHome">
        CheftPad
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>

    <div v-if="userInfo" class="user-nav  mx-auto overflow-hidden">
      <v-navigation-drawer
        v-model="drawer"
        height="100vh"
        width="19.5vw"
        :absolute="!pined"
        :temporary="!pined"
        :mini-variant="pined && minimized"
        :expand-on-hover="pined && minimized"
      >
        <v-list>
          <v-list-item class="px-2" link to="/profile">
            <v-list-item-avatar>
              <v-img :src="userInfo.photoUrl"></v-img>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title class="title">{{
                userInfo.displayName
              }}</v-list-item-title>
              <v-list-item-subtitle>{{ userInfo.email }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list nav>
          <v-list-item
            v-for="route in userRoutes"
            :key="route.name"
            :to="route.link"
            link
          >
            <v-list-item-icon>
              <v-icon>{{ route.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{ route.name }}</v-list-item-title>
          </v-list-item>

          <v-list-group
            prepend-icon="fas fa-paint-brush"
            no-action
            value="true"
          >
            <template v-slot:activator>
              <v-list-item-title>Adjust Navigation</v-list-item-title>
            </template>

            <v-list-item link>
              <v-list-item-icon>
                <v-icon>fas fa-thumbtack</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Pin</v-list-item-title>
              <v-list-item-action>
                <v-checkbox v-model="pined"> </v-checkbox>
              </v-list-item-action>
            </v-list-item>

            <v-list-item link>
              <v-list-item-icon>
                <v-icon>fas fa-compress-alt</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Minimize</v-list-item-title>
              <v-list-item-action>
                <v-checkbox v-model="minimized"> </v-checkbox>
              </v-list-item-action>
            </v-list-item>
          </v-list-group>

          <v-list-item link @click="logout">
            <v-list-item-icon>
              <v-icon>
                fas fa-sign-out-alt
              </v-icon>
            </v-list-item-icon>
            <v-list-item-title>
              Logout
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </div>

    <div v-else tile class="guest-nav mx-auto overflow-hidden">
      <v-navigation-drawer v-model="drawer" width="20vw" absolute temporary>
        <v-list nav>
          <v-list-item
            v-for="route in guestRoutes"
            :key="route.name"
            :to="route.link"
            link
          >
            <v-list-item-icon>
              <v-icon>{{ route.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{ route.name }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navigation',
  data() {
    return {
      pined: false,
      minimized: false,
      drawer: false,
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
          icon: 'fas fa-upload',
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
  .title {
    cursor: pointer;
  }
  .icon {
    cursor: pointer;
  }
}
</style>
