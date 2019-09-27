<template comments>
  <div class="echarts">
    <!-- 这是一段注释 -->
    百度图表
    <div class="login_content">
      <h1>11</h1>
    </div>
    <div class="list"/>
    <div class="list"/>
    <div class="list"/>
    <br>
    <span class="list"/>
    <span class="list"/>
    <span class="list"/>
    <br >
    <i class="list"/>
    <i class="list"/>
    <i class="list"/>

    <!-- 百度图表 -->
  </div>
</template>

<script>
export default {
  name: '',
  comments: true,
  data() {
    return {

    }
  },
  mounted() {
  },
  methods: {

  }
}
</script>

<style lang="" scoped>
  .echarts{
    padding: 12px;
  }
  .login_content {
    position: relative;
    text-align: center;
  }
  h1{
    font: 18px PingFang-SC-Bold;
    color: #FF6600;
  }
/* CSS伪类用法 */
  .login_content h1:after, .login_content h1:before {
    background: #FF6600;
    content: "";
    top: 8px;
    height: 2px;
    position: absolute;
    width: 47%;
  }
  .login_content h1:before {
    left: 4.5px;
  }
  .login_content h1:after {
    right: 4.5px;
  }
  .list{
      float: left;
      margin: 1px;
    }
  .list:after {
    content: "";
    display: block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    border: 2px solid gray;
  }
</style>
