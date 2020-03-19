<template>
  <div class="home-wrapper">
    <search-bar />
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
        bbbbbbbbbbbbbbbb
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
import SearchBar from '@/components/SearchBar.vue'
export default {
  name: 'Home',
  components: {
    'search-bar': SearchBar
  },
  data() {
    return {
      tabs: null
    }
  }
}
</script>

<style lang="scss" scoped>
.home-wrapper {
  padding-top: 5vh;
}
</style>
