<template>
  <div class="container">
   <router-view style="router-views" />
  </div>
</template>

<script>
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
    flex: 1;
    border: 1px solid #ccc;
    padding-left: 24px;
  }

</style>
