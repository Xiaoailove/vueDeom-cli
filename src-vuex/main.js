import Vue from 'vue'
//import VueResource  from 'vue-resource'
import axios from 'axios'
import App from './App'
import store from './store'

Vue.config.productionTip = false
/* eslint-disable no-new */
//Vue.use(VueResource)
Vue.prototype.$bus=new Vue()
Vue.prototype.$axios=axios
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  store //进行vuex的注册，注册之后相当于Vue原型对象上添加了一个$store的属性，
        //其属性值为store因此我们通过$store能够访问到store对象上的方法
})
