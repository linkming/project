<template>
  <div class="child">
    我是来打酱油的
  </div>
</template>

<script>
export default {
  name: 'Child',
  data() {
    return {

    }
  },
  mounted() {
    console.log(this.$root)
  },
  methods: {

  }
}
</script>

<style lang="" scoped>
  .child{
      padding: 12px;
  }
</style>
