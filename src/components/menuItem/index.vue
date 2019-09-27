<template>
  <div class="route">
    <el-menu :collapse="true" default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
      <el-submenu v-if="item.children" index="1">
        <template slot="title">
          <i class="el-icon-location"/>
          <span slot="title">导航一</span>
        </template>
        <el-menu-item v-for="(children,index) in item.children" :key="index">选项1</el-menu-item>
        <el-submenu index="1-4">
          <span slot="title">选项4</span>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item v-else index="2">
        <i class="el-icon-menu"/>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <i class="el-icon-document"/>
        <span slot="title">导航三</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"/>
        <span slot="title">导航四</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
import routes from '@/router'
export default {
  name: '',
  data() {
    return {
      routes: []
    }
  },
  mounted() {
    console.log(routes)
  },
  methods: {

  }
}
</script>

<style lang="" scoped>
  .route{
    color:aliceblue
  }
</style>
