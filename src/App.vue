<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- <router-view/> -->
    <slider-bar></slider-bar>
    <main-content></main-content>
  </div>
</template>

<script>
import sliderBar from '@/layout/slideBar'
import mainContent from '@/layout/main-content'
export default {
  name: 'App',
  components: {sliderBar, mainContent}
}
</script>

<style lang="scss">
*{margin: 0;border: 0;list-style: none;}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  display: flex;
  color: #2c3e50;
  height: 100vh;
}
</style>
