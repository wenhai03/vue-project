import * as types from '@/store/action-types'
import * as api from '@/api/user'
import {setLocal, getLocal} from '@/utils/local'
import per from '@/router/per'
import router from '@/router/index'


function filterRouter(authList) {
  let auths = authList.map(item => item.auth)
  function filter(routes) {
    return routes.filter(route => {
       if (auths.includes(route.meta.auth)) {
         if (route.children) {
           route.children = filter(route.children)
         }
         
         return route
       }
    })
  }
  
  return filter(per)

}
export default {
  namespaced: 'user',
  state: {
    userInfo: {}, // 存储用户数据
    hasPermission: false, // 判断没有没有权限
    menuPermission: false // 默认没有菜单权限
  },
  mutations: {
    // 设置用户信息
    [types.SET_USER] (state, userInfo) {
      state.userInfo = userInfo
      if (userInfo && userInfo.token) {
        setLocal('token', userInfo.token) // 更新token
      }
    
    },
    [types.SET_PERMISSION](state, has){
      state.hasPermission = has
      
    },
    [types.SET_MENU_PERMISSION](state, has){
      state.menuPermission = has
    
    }
  },
  actions: {
    async [types.SET_USER_LOGIN] ({commit}, options) {
      try {
        // 调用登录接口
        const userInfo = await api.login(options)
        commit(types.SET_USER, userInfo)
        commit(types.SET_PERMISSION, true)
      } catch (e) {
        return Promise.reject(e)
      }
    },
    async [types.SET_USER_VALIDATE]({commit}) {
      // 先看下用户有没有权限
      if (!getLocal('token')) return false // 没有权限
      try {
        const result = await api.validate() // 会调用ajax请求，会携带token，后端会验证
        commit(types.SET_USER, result)
        commit(types.SET_PERMISSION, true)
      } catch (e) {
        commit(types.SET_USER, {})
        commit(types.SET_PERMISSION, false)
      }
    },
    [types.SET_ROUTER] ({commit, state}) {
      const authList = state.userInfo.authList // 用户权限 去路由表筛选
  
      if (authList) {
        const routes = filterRouter(authList) // 过滤路由
        let route = router.options.routes.find(item => item.path === 'manager') // 找到管理的路由
        router.children = routes // 给她添加还在
        router.addRoutes([route]) // 把最新的放到路由中
        
        commit(types.SET_MENU_PERMISSION, true) // 表示已经设置完菜单权限
      
      } else {
        // 没有权限也要设置有权限
        commit(types.SET_MENU_PERMISSION, true)
      }
    }
  }
}
