<template>
  <div class="container">
  三十三岁时
  </div>
</template>

<script>
// import core from './../utils/core'
export default {
  name: '',
  data () {
    return {
      form: {
        username: '',
        password: ''
      },
      rules: {
        username: [ { required: true, message: '请输入活动名称', trigger: 'blur' } ]
      }
    }
  },
  mounted () {
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
  .container{
    border: 1px solid #ccc;
    padding-left: 24px;
  }

</style>
