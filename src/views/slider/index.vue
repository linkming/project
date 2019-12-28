<template>
  <div class="left">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose">
      <Menu-item v-for="item in routes" :key="item.path" :item="item" />
    </el-menu>
  </div>
</template>
<script>
import MenuItem from './menu-item'
import routes from '@/router'
export default {
  components: { MenuItem },
  data() {
    return {
      routes: routes.options.routes
    }
  },
  mounted() {
    // console.log(this.routes)
  },
  methods: {
    handleOpen(key, keyPath) {
      // console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
      // console.log(key, keyPath)
    }
  }
}
</script>
<style lang="scss">
.left{
  min-width: 10%;
  min-height: 900px;
  background: #996;
}

</style>
