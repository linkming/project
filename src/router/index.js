import Vue from 'vue'
import Router from 'vue-router'
// import { RouterBuild } from '@/utils/router-build'

Vue.use(Router)
var arr = []
const libRoutes = require.context('./libs', true, /\/((?!\/)[\s\S])+\/index\.js$/)
console.log(libRoutes.resolve(libRoutes.keys()))
const menuRoutes = require.context('./menu', true, /\/((?!\/)[\s\S])+\/index\.js$/)
menuRoutes.keys().forEach(item => {
  arr = arr.concat(menuRoutes(item).default)
})
console.log(arr)
// const routerLib = new RouterBuild({
//   r: require.context('./libs', true, /\/((?!\/)[\s\S])+\/route\.js$/),
//   hasLayout: false
// })
// console.log(routerLib.createObject())
export default new Router({
  routes: [
    {
      path: '/',
      component: resolve => require(['@/views/home'], resolve)
    },
    {
      path: '/home',
      redirect: '/',
      name: 'home',
      component: resolve => require(['@/views/home'], resolve)
    }
  ]
})
