<template>
  <div class="container">
   <v-form :modes="form">
    <v-form-item :label="'用户名: '" :width="'160px'" prop="username">
      <el-input v-model="form.username"></el-input>
    </v-form-item>
   </v-form>
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

<style lang="" scoped>
  .container{
    border: 1px solid #ccc;
    height: 100%;
    padding-left: 24px;
  }

</style>
