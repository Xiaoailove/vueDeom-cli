import Vue from 'vue'
import VueRouter from "vue-router"
import About from "../pages/About.vue"
import Home from "../pages/Home.vue"
Vue.use(VueRouter)
export default new VueRouter({
    routes:[
        {path:'/about',component:About},
        {path:'/home',component:Home},
        {path:'/',redirect:'/about'}
    ]
})