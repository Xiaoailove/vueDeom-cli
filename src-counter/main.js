import Vue from 'vue'
import App from './App'
import './base.css'
import eventBus from './eventBus.js'
Vue.config.productionTip = false
/* eslint-disable no-new */
//注册一个全局事件总线
Vue.prototype.$bus=eventBus
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
