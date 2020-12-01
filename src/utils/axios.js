// 对axios二次封装
import axios from 'axios'
import {Loading} from 'element-ui'
import store from '../store/index'
import * as types from '../store/action-types'
import {getLocal} from "@/utils/local"

let loadingInstance

// 封装的目的是封装公共的拦截器，每个实例有单独的自己拦截器
// 创建一个单独的实例，每次请求都使用这个方法来创建实例
// 当页面切换时候 删除不必要的请求
class Http {
  constructor () {
    this.timeout = 3000
    // 开发时和生成时采用不用的前缀发生请求
    this.baseURL = process.env.NODE_ENV === 'development' ? 'http://localhost:8080/' : '/'
    
    this.queue = {} // 存放所有请求的队列
  }
  
  mergeOptions (options) { // 合并参数
    return {
      timeout: this.timeout,
      baseURL: this.baseURL,
      ...options
    }
  }
  
  setInterceptor (instance, url) {
    instance.interceptors.request.use((config) => {
      // 所有的请求都会走着
      this.queue[url] = true
      
      if (Object.keys(this.queue).length === 0) {
        // 当前是所有请求中的第一个
        loadingInstance = Loading.service({fullscreen: true})
      }
      
      let Cancel = axios.CancelToken
      config.cancelToken = new Cancel(function (c) {
        store.commit(types.SET_REQUEST_TOKEN, c)
      })
      // jwt规范
      config.headers.authoriztion = 'Bear' + getLocal('token')
      
      return config
    })
    
    instance.interceptors.response.use(res => {
      delete this.queue[url]
      if (Object.keys(this.queue).length === 0) {
        // loadingInstance.close()
      }
  
      if (res.status === 200) {
        if (res.data.err === 1) {
          return Promise.reject(res.data.err)
        }
        // console.log('res.data.data -> ', res.data.data)
        return Promise.resolve(res.data.data)
      } else {
        // 401 403... 去判断每个状态码代表的含义
        return Promise.reject(res)
      }
      
      
    }, error => {
      delete this.queue[url]
      return Promise.reject(error)
    })
  }
  
  request (options) { // 用户的参数 + 默认参数 = 总共的参数
    const opts = this.mergeOptions(options)
    // 对请求的超时，切换取消请求，loading
    const axiosInstance = axios.create()
    
    // 添加拦截器
    this.setInterceptor(axiosInstance, options.url)
    
    // 当调用axios.request时候，内部会创建一个axios实例，并且给这个实例传入配置属性
    return axiosInstance(opts)
  }
  
  // 这两个方法只是对request方法 一个简写而已
  get (url, config = {}) {
    return this.request({
      url,
      method: 'get',
      ...config
    })
  }
  
  post (url, data) {
    return this.request({
      url,
      method: 'post',
      data
    })
  }
  
}


export default new Http
