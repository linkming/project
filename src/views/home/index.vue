<template>
  <div class="home">
  <li-input placeholder="请输入名称" @input="writing" v-model="namesUser"></li-input>
  </div>
</template>

<script>
import liInput from '@/components/liInput'
import {Debounce} from '@/utils/apis.js'
export default {
  name: 'home',
  components: {liInput},
  data () {
    return {
      namesUser: ''
    }
  },
  mounted () {
    // console.log(require('@antv/f2'))
    // this.getbaidu()
  },
  methods: {
    input (data) {
      console.log(this.namesUser)
      // this.namesUser = data
    },
    writing (event) {
      console.log('event', event)
    },
    fn () {
      console.log('running')
    },
    getbaidu () {
      this.$api.getbaidu().then(res => {
        console.log(res)
      })
    },
    fn1 () {
      this.list[1] = 80
      Debounce(function () { console.log('runing') }, 3000)
      console.log(this.list)
    },
    debounce: function (func, wait) {
      let timeout
      return function () {
        let context = this
        let args = arguments

        if (timeout) clearTimeout(timeout)

        let callNow = !timeout
        timeout = setTimeout(() => {
          timeout = null
        }, wait)

        if (callNow) func.apply(context, args)
      }
    },
    throttle: function (handler, wait) {
      var lastTime = 0

      return function () {
        var nowTime = new Date().getTime()

        if (nowTime - lastTime > wait) {
          handler.apply(this, arguments)
          lastTime = nowTime
        }
      }
    }
  }
}
</script>

<style>
  .home{
    padding: 12px;
  }
</style>
