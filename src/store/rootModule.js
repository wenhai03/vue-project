import user from './modules/user'
import article from './modules/article'
import * as types from './action-types'
import {getBannerList} from '@/api/public'

export default {
  state: {
    // 轮播图数据
    bannerList: [],
    a: 0
  },
  mutations: {
    // mutation将状态放到bannerList中
    async [types.SET_BANNER_LIST] (state, payload) {
      state.bannerList = payload
    }
  },
  actions: {
    // 调用轮播图接口，提交到mutation中
    async [types.SET_BANNER_LIST] ({commit}) {
      const bannerList = await getBannerList()
  
      commit(types.SET_BANNER_LIST, bannerList)
    }
  },
  modules: {
    user,
    article,
  }
}
