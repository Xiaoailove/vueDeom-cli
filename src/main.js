import Vue from 'vue'
import VueResource  from 'vue-resource'
import App from './App'

Vue.config.productionTip = false
/* eslint-disable no-new */
Vue.use(VueResource)
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
