import Vue from 'vue'
import VueResource  from 'vue-resource'
import axios from 'axios'
import App from './App'

Vue.config.productionTip = false
/* eslint-disable no-new */
Vue.use(VueResource)
Vue.prototype.$bus=new Vue()
Vue.prototype.$axios=axios
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
