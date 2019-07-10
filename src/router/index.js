import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'dashboard',
      title: '首页',
      component: () => import('@/views/dashboard.vue')
    },
    {
      path: '/config',
      name: 'systemSetting',
      title: '系统设置',
      component: () => import('@/views/config/index.vue')
    }
  ]
})
