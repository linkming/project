<template>
  <div class="main-content">
   <nav-bar></nav-bar>
   <router-view />
  </div>
</template>

<script>
import navBar from './nav-bar'
export default {
  name: 'main-content',
  components: {navBar},
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
  }
</style>
