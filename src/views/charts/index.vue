<template>
  <div v-move class="right-plan">
    <transition>
      <router-view/>
    </transition>
    <!-- <el-button @click="fn">点击延迟</el-button> -->
  </div>
</template>

<script>
export default {
  name: 'RightPlan',
  directives: {
    move: {
      updated(el, binding, vnode) {
        document.onmouseover = vnode.context.debounce(vnode.context.printWidth, 1000)
      }
    }
  },
  data() {
    return {
      list: [1, 2, 3]
    }
  },
  mounted() {

  },
  methods: {
    fn() {
      // eslint-disable-next-line no-unused-vars
      var timer
      timer = setTimeout(() => {
        alert('执行了3秒')
      }, 3000)
    },
    debounce(operate, delay) {
      let time = null
      let timer = null
      let newTime = null
      function task() {
        newTime = +new Date()
        // console.log(newTime)
        if (newTime - time < delay) {
          timer = setTimeout(task, delay)
        } else {
          operate()
          timer = null
        }
        time = newTime
      }
      return function() {
      // 更新时间戳
        time = +new Date()
        if (!timer) {
          timer = setTimeout(task, delay)
        }
      }
    },
    printWidth() {
      console.log(this.list)
      console.log(new Date())
    }
  }

}
</script>

<style lang="scss" scoped>
  .right-plan{
    width: 100%;
    height: 100%;
    padding: 12px;
  }
</style>
