<template v-if="typeof user == 'null'">
  <v-card class="login-wrapper">
    <v-card-title class="headline">Login</v-card-title>
    <v-text-field
      v-model="email"
      color="yellow darken-3"
      label="Email"
      type="email"
      :filled="true"
      :outlined="true"
    />
    <v-text-field
      v-model="password"
      color="yellow darken-3"
      label="Password"
      type="password"
      :outlined="true"
      :filled="true"
    />
    <div class="login-type">
      <v-btn
        class="Login white--text"
        color="yellow darken-3"
        @click="login('Login')"
        >Login</v-btn
      >
      <div class="or">
        <hr />
        <hr />
      </div>
      <v-btn
        v-for="item in types"
        :key="item"
        icon
        :class="item"
        class="white--text social"
        :color="icon[item][1]"
        @click="login(item)"
        ><v-icon>fab fa-{{ icon[item][0] }}</v-icon></v-btn
      >
    </div>
  </v-card>
</template>

<script>
export default {
  name: 'Login',
  props: {
    types: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      email: '',
      password: '',
      error: '',
      icon: {
        Twitter: ['twitter', 'light-blue lighten-1'],
        Google: ['google', 'red darken-3'],
        Facebook: ['facebook-f', 'blue darken-3'],
        Github: ['github', 'grey darken-4']
      }
    }
  },
  computed: {
    user() {
      return this.$store.getters['user/getUser']
    }
  },
  methods: {
    login(type) {
      this.$store
        .dispatch('user/login', {
          email: this.email,
          password: this.password,
          type
        })
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
.login-wrapper {
  height: 54vh;
  padding: 2vw;
}
.login-type {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  justify-items: stretch;
  grid-gap: 2vh 0vw;
  .Login {
    grid-column: 1 / span 4;
  }
  .social {
    justify-self: center;
  }
  .or {
    grid-column: 1 / span 4;
    hr {
      background-color: #eee;
      border: 0 none;
      color: #eee;
      height: 0.75px;
    }
  }
}
</style>
