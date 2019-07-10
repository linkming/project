<template>
  <div id="app">
    <headers class="header"/>
    <div class="bottom">
      <slider/>
      <mains/>
    </div>
  </div>
</template>

<script>
import headers from './views/headers'
import slider from './views/slider'
import mains from './views/mains'
export default {
  components: { headers, slider, mains }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  .header{
    height: 50px;
    width:100%;
    background:#eee;
  }
  .bottom{
    display: flex;
    width:100%;
  }
}
</style>
