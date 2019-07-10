import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: () => import('@/views/dashboard.vue')
    },
    {
      path: '/config',
      name: 'systemSetting',
      component: () => import('@/views/config/index.vue')
    }
  ]
})
