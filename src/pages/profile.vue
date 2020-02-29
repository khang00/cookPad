<template>
  <div class="profile">
    <user-view v-if="!edit" :entity="UserInfo" :model="model" />
    <user-edit
      v-if="edit"
      :entity="UserInfo"
      :model="model"
      @finish="finishEdit"
    />
  </div>
</template>

<script>
import userView from '../components/user/userView.vue'
import userEdit from '../components/user/userEdit.vue'
import { infoType } from '../plugins/lib/userInfoQuery'

export default {
  name: 'Profile',
  components: {
    'user-view': userView,
    'user-edit': userEdit
  },
  data() {
    return {
      model: infoType,
      edit: false
    }
  },
  computed: {
    UserInfo() {
      return this.$store.getters['userInfo/getInfo']
    }
  },
  methods: {
    editInfo() {
      this.edit = true
    },
    cancelEdit() {
      this.edit = false
    },
    finishEdit() {}
  }
}
</script>

<style lang="scss" scoped></style>
