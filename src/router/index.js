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
      path: '/directive',
      name: 'directive',
      title: '自定义指令',
      component: () => import('@/views/directives')
    },
    {
      path: '/charts',
      name: 'chart',
      title: '可视化图表',
      component: () => import('@/views/charts/index.vue'),
      children: [
        {
          path: 'echarts',
          name: 'echarts',
          title: '百度图表',
          component: () => import('@/views/charts/echarts.vue')
        },
        {
          path: 'd3',
          name: 'd3',
          title: 'D3',
          component: () => import('@/views/charts/d3.vue')
        }
      ]
    },
    {
      path: '/demos',
      title: '例子',
      component: () => import('@/views/demo/index.vue'),
      children: [
        {
          path: '',
          name: 'Demos',
          title: '默认配置',
          component: () => import('@/views/demo/observable.vue')
        },
        {
          path: 'observable',
          name: 'Observable',
          title: '相当于VUEX',
          component: () => import('@/views/demo/observable.vue')
        },
        {
          path: 'root',
          name: 'root',
          title: 'root',
          component: () => import('@/views/demo/viewRoot.vue')
        }
      ]
    },
    {
      path: '/form',
      icon: 'el-icon-menu',
      name: 'formSetting',
      title: 'FORM表单',
      component: () => import('@/views/form')
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
