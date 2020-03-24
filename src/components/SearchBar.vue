<template>
  <v-text-field
    v-model="filter"
    color="yellow darken-3"
    prepend-inner-icon="fas fa-search"
    label="Search"
    rounded
    dense
    filled
    @keyup="triggerSearch"
  ></v-text-field>
</template>

<script>
export default {
  name: 'SearchBar',
  data() {
    return {
      filter: ''
    }
  },
  methods: {
    triggerSearch() {
      const searchFilters = {
        content: this.filter
      }
      const emailReg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

      if (emailReg.test(this.filter)) {
        searchFilters.type = 'email'
      } else {
        searchFilters.type = 'displayName'
      }
      this.$emit('search', searchFilters)
    }
  }
}
</script>

<style></style>
