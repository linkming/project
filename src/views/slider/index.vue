<template>
  <div class="left">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose">
      <template v-for="(item,index) in routes">
        <el-submenu v-if="item.children" :index="index.toString()" :key="index">
          <template slot="title">
            <i class="el-icon-location"/>
            <span>{{ item.title }}</span>
          </template>
        </el-submenu>
        <el-menu-item v-else :index="index.toString()" :key="index">
          <i class="el-icon-document"/>
          <span slot="title">{{ item.title }}</span>
        </el-menu-item>
      </template>
      <!-- <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"/>
          <span>导航一</span>
        </template>
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template slot="title">选项4</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="2">
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
      </el-menu-item> -->
    </el-menu>
    <!-- <el-menu
      :router="true"
      default-active="2"
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      @open="handleOpen"
      @close="handleClose">
      <el-submenu v-for="(item,index) in routes" :key="index" :index="item.path">
        <i :class="item.icon"/>
        <template v-if="item.children">
          <el-menu-item v-for="(child,keys) in item.children" :key="keys" >
            <i :class="item.icon"/>
            <span slot="title">{{ child.title }}</span>
          </el-menu-item>
        </template>
        <span slot="title">{{ item.title }}</span>
      </el-submenu>
    </el-menu> -->
    <!-- <router-link :to="{name:'d3'}">d3</router-link> -->
    <!-- <ul>
      <li>
        <router-link :to="{name:'systemSetting'}">设置</router-link>
      </li>
      <li>
        <router-link :to="{name:'d3'}">D3</router-link>
      </li>
      <li>
        <router-link :to="{name:'echarts'}">百度</router-link>
      </li>
      <li>
        <router-link :to="{name:'chart'}">图表首页</router-link>
      </li>
      <li>
        <router-link :to="{name:'directive'}">自定义指令</router-link>
      </li>
    </ul> -->
    <!-- <ul>
      <li v-for="(item,index) in routes" :key="index">
        <router-link :to="{'name':item.name}">
          {{ item.title }}
        </router-link>
        <ul v-if="item.children">
          <li v-for="(value,key) in item.children" :key="key">
            <router-link :to="{'name':value.name}">
              {{ value.title }}
            </router-link>
          </li>
        </ul>
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
  min-width: 10%;
  min-height: 900px;
  background: #996;
}

</style>
