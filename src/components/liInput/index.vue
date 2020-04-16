<template>
  <div class="li-input">
   <input class="input-inner" type="text" :vlaue="value" @input="oninput" v-bind="$attrs">
  </div>
</template>

<script>
export default {
  name: 'liInput',
  props: ['value'],
  inheritAttrs: false,
  data () {
    return {

    }
  },
  mounted () {
  },
  methods: {
    oninput (event) {
      // this.value = value
      console.log(event.target.value)
      // this.$emit('input', event.target.value)
    }

  }
}
</script>

<style lang='scss' scoped>
  .li-input{
    .input-inner{
      height: 36px;
      width: 100%;
    }
  }
</style>
