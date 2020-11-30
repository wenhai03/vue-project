import * as types from '@/store/action-types'
import * as api from '@/api/user'
import {setLocal, getLocal} from '@/utils/local'
import fa from "element-ui/src/locale/lang/fa"

export default {
  namespaced: 'user',
  state: {
    userInfo: {}, // 存储用户数据
    hasPermission: false // 判断没有没有权限
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
    }
  }
}
