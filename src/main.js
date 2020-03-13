// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VForm from './components/form/index'
import VFormItem from './components/form/form-item'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import api from '@/api'
Vue.use(Element)
// import axios from 'axios'
Vue.component('v-form', VForm)
Vue.component('v-form-item', VFormItem)
Vue.config.productionTip = false
Vue.prototype.$api = api
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
