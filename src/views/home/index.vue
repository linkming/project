<template>
  <div class="home">
   我是home页面
   <button @click="fn1"> 点击过快</button>

  </div>
</template>

<script>
import {Debounce} from '@/utils/apis.js'
export default {
  name: 'home',
  data () {
    return {
      list: [1, 2, 3, 4]
      // f2: require('@antv/f2')
    }
  },
  mounted () {
    // console.log(require('@antv/f2'))
    // this.getbaidu()
  },
  methods: {
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
