import * as config from './config'
import axios from '@/utils/axios'

// 接口的调用，如果接口需要返回的结果放在vuex中，需要把调用到action中

// 获取轮播图接口
export const getBannerList = () => axios.get(config.getBannerList)


export const getCaptcha = (uid) => {
  if (uid) {
    return axios.get(config.getCaptcha)
  }
  
  return Promise.reject('uid 不存在')
}

