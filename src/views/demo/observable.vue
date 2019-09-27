<template>
  <div class="Observable">
    <label for="bookNum">数 量</label>
    <button @click="setCount(count+1)">+</button>
    <span>{{ count }}</span>
    <button @click="setCount(count-1)">-</button>
  </div>
</template>

<script>
import { store, mutations } from '@/utils/observable'
export default {
  name: 'Observable',
  data() {
    return {

    }
  },
  computed: {
    count() {
      return store.count
    }
  },
  mounted() {
  },
  methods: {
    setCount(count) {
      mutations.setCount(count)
    }
  }
}
</script>

<style lang="" scoped>
  .Observable{
    padding: 12px;
  }
</style>
