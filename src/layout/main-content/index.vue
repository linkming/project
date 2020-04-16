<template>
  <div class="main-content">
   <nav-bar></nav-bar>
   <view-container></view-container>
  </div>
</template>

<script>
import navBar from './nav-bar'
import viewContainer from './view-container'
export default {
  name: 'main-content',
  components: {navBar, viewContainer},
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
  .main-content{
    flex: 1;
    display: flex;
    flex-direction: column;
  }
</style>
