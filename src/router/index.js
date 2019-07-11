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
      path: '/charts',
      name: 'chart',
      title: '可视化图表',
      component: () => import('@/views/charts/index.vue'),
      children: [
        {
          path: '/echarts',
          name: 'echarts',
          title: '百度图表',
          component: () => import('@/views/charts/echarts.vue')
        }
      ]
    },
    {
      path: '/config',
      icon: 'el-icon-menu',
      name: 'systemSetting',
      title: '系统设置',
      component: () => import('@/views/config/index.vue')
    }
  ]
})
