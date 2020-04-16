<template>
  <div class="view-container">
    路由容器
   <router-view />
  </div>
</template>

<script>
export default {
  name: 'viewContainer',
  data () {
    return {

    }
  },
  mounted () {

  },
  methods: {

  }
}
</script>

<style lang='scss' scoped>
  .view-container{
    flex: 1;
  }
</style>
