<template>
  <div class="navigation">
    <v-app-bar width="100%" color="yellow darken-3" dark absolute flat dense>
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      <v-toolbar-title>CheftPad</v-toolbar-title>
    </v-app-bar>

    <div v-if="userInfo" class="user-nav  mx-auto overflow-hidden">
      <v-navigation-drawer v-model="drawer" width="20vw" absolute temporary>
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
          <v-list-item link>
            <v-list-item-icon>
              <v-icon>fas fa-search</v-icon>
            </v-list-item-icon>
            <v-autocomplete
              placeholder="Start typing to Search"
              hide-no-data
              hide-selected
            ></v-autocomplete>
          </v-list-item>

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
    }
  }
}
</script>

<style lang="scss" scoped>
.navigation {
  height: 100vh;
}
</style>
