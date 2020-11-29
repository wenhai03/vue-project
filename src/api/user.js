import * as config from './config'
import axios from '@/utils/axios'

export const login = (options) => {
  console.log('options 00 -> ', options)
  if (options.username && options.password && options.verify && options.uid) {
    console.log('1111 -> ')
    return axios.post(config.login, options)
  }
  console.log('8888 ->' )
  
  return Promise.reject('登录参数不正确！')
}
