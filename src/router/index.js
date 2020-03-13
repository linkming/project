import Vue from 'vue'
import Router from 'vue-router'
// import { RouterBuild } from '@/utils/router-build'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)
console.log(require.context('./libs', true, /\/((?!\/)[\s\S])+\/route\.js$/).keys())
// const routerLib = new RouterBuild({
//   r: require.context('./libs', true, /\/((?!\/)[\s\S])+\/route\.js$/),
//   hasLayout: false
// })
// console.log(routerLib.createObject())
export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/home',
      name: 'home',
      component: resolve => require(['@/views/home'], resolve)
    }
  ]
})
