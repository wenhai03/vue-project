import * as types from '@/store/action-types'
import * as api from '@/api/user'
import {setLocal, getLocal} from '@/utils/local'
import per from '@/router/per'
import router from '@/router/index'

export default {
  namespaced: 'user',
  state: {
    userInfo: {}, // 存储用户数据
    hasPermission: false, // 判断没有没有权限
    menuPermission: false, // 默认没有处理菜单
    btnPermission: {edit: true, delete: false, add: false},
  },
  mutations: {
    // 设置用户信息
    [types.SET_USER] (state, userInfo) {
      // console.log('userInfo -> ', userInfo)
      state.userInfo = userInfo
      if (userInfo && userInfo.token) {
        setLocal('token', userInfo.token) // 更新token
      }
    
    },
    [types.SET_PERMISSION](state, has){
      state.hasPermission = has
      
    },
    [types.SET_MENU_PERMISSION](state, has){
      console.log('has -> ', has)
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
      console.log('验证用户 -> ')
      console.log('不存在token getLocal -> ', !getLocal('token'))
      // 先看下用户有没有权限
      if (!getLocal('token')) return false // 没有权限
      try {
        const result = await api.validate() // 会调用ajax请求，会携带token，后端会验证
        // console.log('result -> ', result)
        commit(types.SET_USER, result)
        commit(types.SET_PERMISSION, true)
      } catch (e) {
        commit(types.SET_USER, {})
        commit(types.SET_PERMISSION, false)
      }
    },
    [types.SET_ROUTER] ({commit, state}) {
      const authList = state.userInfo.authList // 用户权限 去路由表筛选
      console.log('后台返回的用户权限信息', authList)
      if (authList) {
        const routes = filterRouter(authList) // 过滤路由
        console.log('过滤路由 最新routes -> ', routes)
        console.log('router.options -> ', router.options)
        let route = router.options.routes.find(item => item.path === '/manager') // 找到管理的路由
        console.log('find route -> ', route)
        route.children = routes // 给当前添加过滤后的最新路由
        console.log('final route -> ', route)
        console.log('router -> ', router)
        router.addRoutes([route]) // 把最新的放到路由中
        console.log('final router -> ', router)
        commit(types.SET_MENU_PERMISSION, true) // 表示已经设置完菜单权限
      
      } else {
        // 没有权限也要设置有权限
        commit(types.SET_MENU_PERMISSION, true)
      }
    }
  }
}

function filterRouter(authList) {
  let auths = authList.map(item => item.auth)
  console.log('auths -> ', auths)
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
