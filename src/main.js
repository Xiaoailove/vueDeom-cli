import Vue from 'vue'
import App from './App'
import './base.css'
Vue.config.productionTip = false
/* eslint-disable no-new */
//注册一个全局事件总线
Vue.prototype.$bus=new Vue()
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
