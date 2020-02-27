<template>
  <div class="profile">
    <user-display v-if="!edit" :entity="UserInfo" :model="model" />
    <user-edit
      v-if="edit"
      :entity="UserInfo"
      :model="model"
      @finish="finishEdit"
    />
    <button v-if="edit" @click="cancelEdit">Cancel</button>
    <button v-if="!edit" @click="editInfo">Edit</button>
  </div>
</template>

<script>
import ObjectView from '../components/ObjectView.vue'
import ObjectEdit from '../components/ObjectEdit.vue'
import { infoType } from '../plugins/lib/userInfoQuery'

export default {
  name: 'Profile',
  components: {
    'user-display': ObjectView,
    'user-edit': ObjectEdit
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
