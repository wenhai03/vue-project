import * as types from '@/store/action-types'
import * as api from '@/api/user'

export default {
  namespaced: 'user',
  state: {
    userInfo: {} // 存储用户数据
  },
  mutations: {
    // 设置用户信息
    [types.SET_USER] (state, userInfo) {
      state.userInfo = userInfo
    }
  },
  actions: {
    async [types.SET_USER_LOGIN] ({commit}, options) {
      try {
        // 调用登录接口
        const userInfo = await api.login(options)
        commit(types.SET_USER, userInfo)
      } catch (e) {
        return Promise.reject(e)
      }
    }
  }
}
