<template>

  <div class="left">
    <ul>
      <li v-for="(item,index) in routes" :key="index">
        <router-link :to="{'name':item.name}">
          {{ item.title }}
        </router-link>
      </li>
      <!-- <li><router-link :to="{name: 'systemSetting'}">设置</router-link></li>
      <li><router-link :to="{name: 'dashboard'}">主页</router-link></li>
      <li>音乐</li>
      <li>表格</li>
      <li>图表</li> -->
    </ul>
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
  }
}
</script>
<style lang="scss">
.left{
  width: 120px;
  background: #996;
}

</style>
