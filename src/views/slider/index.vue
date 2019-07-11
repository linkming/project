<template>
  <div class="left">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      @open="handleOpen"
      @close="handleClose">
      <el-menu-item v-for="(item,index) in routes" :key="index">
        <i :class="item.icon"/>
        <template v-if="item.children">
          <el-menu-item v-for="(child,keys) in item.children" :key="keys" >
            <i :class="item.icon"/>
            <span slot="title">{{ child.title }}</span>
          </el-menu-item>
        </template>
        <span slot="title">{{ item.title }}</span>
      </el-menu-item>
    </el-menu>
    <!-- <ul>
      <li v-for="(item,index) in routes" :key="index">
        <router-link :to="{'name':item.name}">
          {{ item.title }}
        </router-link>
      </li>
    </ul> -->
  </div>
</template>
<script>
import routes from '@/router'
export default {
  data() {
    return {
      routes: routes.options.routes
    }
  },
  mounted() {
    console.log(this.routes)
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>
<style lang="scss">
.left{
  min-width: 120px;
  // background: #996;
}

</style>
