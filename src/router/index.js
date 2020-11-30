import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home/index'
import hooks from './hooks'
import article from './article.router'

console.log('article -> ', article)

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
  },
  ...article
]

const router = new VueRouter({
  routes
})

// 需要给路由增加多个钩子 每个钩子实现一个具体功能 beforeEach next
Object.values(hooks).forEach(hook => {
  // 绑定hook中的this是路由的实例 好处可以在方法进行跳转
  router.beforeEach(hook.bind(router))
})

export default router
