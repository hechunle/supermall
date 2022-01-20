import Vue from "vue";
import VueRouter from "vue-router"

Vue.use(VueRouter)


const routers = [{
  path: '',
  redirect:'/home'
},{
  path:'/home',
  component: ()=>import('../views/home/Home')
},{
  path:'/cart',
  component: ()=>import('../views/cart/Cart')
},{
  path:'/category',
  component: ()=>import('../views/category/Category')
},{
  path:'/profile',
  component: ()=>import('../views/profile/Profile')
}]

const route = new VueRouter({
  routes: routers,
  mode: 'history'

})


export default route
