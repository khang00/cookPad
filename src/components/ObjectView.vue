<template>
  <div v-if="model && entity" class="viewer">
    <img v-for="image in model['image']" :key="image" :src="entity[image]" />
    <p v-for="date in model['date']" :key="date">{{ Date(entity[date]) }}</p>
    <p v-for="info in model['string']" :key="info">{{ entity[info] }}</p>
  </div>
</template>

<script>
export default {
  name: 'ObjectView',
  props: {
    model: {
      type: Array,
      default: () => []
    },
    entity: {
      type: Object,
      default: Object
    }
  }
}
</script>

<style lang="sass" scoped></style>
