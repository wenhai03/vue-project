import store from '../store/index'
import * as types from '../store/action-types'
import el from "element-ui/src/locale/lang/el"

export default {
  // 名字公司给用户看
  'cancelToken': async function(to, from, next){ // beforeEach的方法在这里
    console.log(' -> ', )
    store.state.ajaxTokens.forEach(fn => fn()) // 取消上一次页面发送的请求
    
    // 取消完之后设置ajaxTokens = []
    store.commit(types.SET_REQUEST_TOKEN, 'clear')
    next()
  },
  'loginPermission': async function (to, from, next) {
    // 返回的结果 还是要存放到vuex中
    await store.dispatch(`user/${types.SET_USER_VALIDATE}`)
    
    if (store.state.user.hasPermission) {
      if (to.path === '/login') {
        next('/') // 如果去的页面是login 直接回到首页
      } else {
        next()
      }
    } else {
      // 看下哪些接口允许没有权限访问
      // 导航鉴权
      const needLogin = to.matched.some(item => item.meta.needLogin)
      if (needLogin) {
        console.log('post页面需要登录，所以点击发表文章就会跳转到登录 -> ')
        next('/login')
      } else {
        next()
      }
    }
    
  }
}
