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
        <post-viewer :filter="filter" />
      </v-tab-item>
      <v-tab-item>
        <users-viewer :filter="filter" />
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
import SearchBar from '@/components/SearchBar.vue'
import UsersViewer from '@/components/user/UsersViewer.vue'
import PostViewer from '@/components/post/PostViewer.vue'
export default {
  name: 'Home',
  components: {
    'search-bar': SearchBar,
    'users-viewer': UsersViewer,
    'post-viewer': PostViewer
  },
  data() {
    return {
      tabs: null,
      filter: null,
      userFilter: null,
      postFilter: null
    }
  },
  methods: {
    searchForContent(filter) {
      this.filter = filter
    }
  }
}
</script>

<style lang="scss" scoped>
.home-wrapper {
  padding-top: 5vh;
}
</style>
