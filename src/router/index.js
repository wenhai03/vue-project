import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home/index'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "login" */ '../views/User/login.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
