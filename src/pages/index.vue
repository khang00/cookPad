<template>
  <div class="home-wrapper">
    <search-bar @search="searchForContent" />
    <v-tabs v-model="tabs" color="yellow darken-3" grow centered icons-and-text>
      <v-tab>
        Dishes
        <v-icon>fas fa-utensils</v-icon>
      </v-tab>
      <v-tab>
        Users
        <v-icon>fas fa-user</v-icon>
      </v-tab>
    </v-tabs>
    <v-tabs-items v-model="tabs">
      <v-tab-item>
        aaaaaaaaaaaaaaaa
      </v-tab-item>
      <v-tab-item>
        <users-viewer :filter="userFilter" />
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
import SearchBar from '@/components/SearchBar.vue'
import UsersViewer from '@/components/user/UsersViewer.vue'
export default {
  name: 'Home',
  components: {
    'search-bar': SearchBar,
    'users-viewer': UsersViewer
  },
  data() {
    return {
      tabs: null,
      userFilter: null,
      postFilter: null
    }
  },
  methods: {
    searchForContent(filter) {
      if (this.tabs === 0) {
        this.postFilter = filter
      }

      if (this.tabs === 1) {
        this.userFilter = filter
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.home-wrapper {
  padding-top: 5vh;
}
</style>
