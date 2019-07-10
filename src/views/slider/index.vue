<template>

    <div class="left">
      <el-slider></el-slider>
        <ul>
          <li><router-link :to="{name: 'systemSetting'}">设置</router-link></li>
          <li><router-link :to="{name: 'dashboard'}">主页</router-link></li>
          <li>音乐</li>
          <li>表格</li>
          <li>图表</li>
        </ul>
    </div>
</template>
<script>
export default {
  data () {
    return {

    }
  }
}
</script>
<style lang="scss">
.left{
  width: 120px;
  background: #996;
}

</style>
