<template>
  <div class="object-edit">
    <img v-for="image in model['image']" :key="image" :src="entity[image]" />
    <input
      v-for="date in model['date']"
      :key="date"
      :value="Date(entity[date])"
    />
    <input
      v-for="info in model['string']"
      :key="info"
      v-model="newEntity[info]"
    />
    {{ newEntity['name'] }}
    <button>Finish</button>
  </div>
</template>

<script>
export default {
  name: 'ObjectEdit',
  props: {
    model: {
      type: Array,
      default: () => []
    },
    entity: {
      type: Object,
      default: Object
    }
  },
  data() {
    return {
      newEntity: this.entity
    }
  }
}
</script>
<style lang="sass" scoped></style>
