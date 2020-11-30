import * as config from './config'
import axios from '@/utils/axios'

export const login = (options) => {
  if (options.username && options.password && options.verify && options.uid) {
    return axios.post(config.login, options)
  }
  
  return Promise.reject('登录参数不正确！')
}

export const validate = () => axios.get(config.validate)

