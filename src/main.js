// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import element from 'element-ui'
import echarts from 'echarts'

import echartsGL from 'echarts-gl' // 引入echarts
Vue.prototype.$echartsGL = echartsGL // 引入组件（将echarts注册为全局）
import 'element-ui/lib/theme-chalk/index.css'

import { codemirror } from 'vue-codemirror'
import 'codemirror/lib/codemirror.css'

import api from '@/api'
Vue.prototype.$api = api
Vue.prototype.$echart = echarts
Vue.config.productionTip = false
Vue.use(element)
Vue.use(codemirror)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
// router.beforeEach((to, from, next) => {
//   console.log(to)
//   next()
//   // ...
// })
