<template>
  <div class="intro">
    <v-card v-if="!edit" class="intro-view">
      <v-list v-for="(value, name) in infos" :key="name"
        >{{ name }}: {{ value }}</v-list
      >
    </v-card>

    <div v-if="edit" class="intro-edit">
      <div v-for="(value, name) in infos" :key="name">
        <div v-if="name === 'gender'" class="gender-input">
          <h2>Gender</h2>
          <v-radio-group v-model="infoEdited.gender">
            <v-radio label="male" value="male" checked></v-radio>
            <v-radio label="female" value="female"></v-radio>
          </v-radio-group>
        </div>

        <div v-if="name === 'DOB'" class="date">
          <h2>Date Of birth</h2>
          <v-date-picker
            v-model="infoEdited.DOB"
            :reactive="true"
            :scrollable="true"
            color="green lighten-1"
          />
        </div>

        <v-text-field
          v-if="name != 'gender' && name != 'DOB'"
          v-model="infoEdited[name]"
          :label="name"
          :outlined="true"
          :placeholder="value"
        />
      </div>
    </div>
    <v-btn
      v-if="edit"
      :outlined="true"
      color="green lighten-1"
      @click="finishEdit"
      >Finish</v-btn
    >
    <v-btn
      v-if="edit"
      :outlined="true"
      color="green lighten-1"
      @click="cancelEdit"
      >Cancel</v-btn
    >
    <v-btn
      v-if="!edit"
      :outlined="true"
      color="green lighten-1"
      @click="editInfo"
      >Edit</v-btn
    >
  </div>
</template>

<script>
export default {
  name: 'Intro',
  props: {
    infos: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      edit: false,
      infoEdited: { ...this.infos }
    }
  },
  computed: {
    user() {
      return this.$store.getters['user/getUser']
    }
  },
  methods: {
    editInfo() {
      this.edit = true
    },
    cancelEdit() {
      this.edit = false
    },
    finishEdit() {
      this.$store.dispatch('userInfo/updateInfo', {
        userId: this.user.userId,
        info: this.infoEdited
      })
      this.edit = false
    }
  }
}
</script>

<style lang="scss" scoped></style>
