<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- <router-view/> -->
    <slider-bar></slider-bar>
  </div>
</template>

<script>
import sliderBar from '@/layout/slideBar'
export default {
  name: 'App',
  components: {sliderBar}
}
</script>

<style lang="scss">
*{margin: 0;border: 0;list-style: none;}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
