// 对axios二次封装
import axios from 'axios'

// 封装的目的是封装公共的拦截器，每个实例有单独的自己拦截器
// 创建一个单独的实例，每次请求都使用这个方法来创建实例

class Http {
  constructor (props) {
    this.timeout = 3000
    // 开发时和生成时采用不用的前缀发生请求
    this.baseURL = process.env.NODE_ENV === 'development' ? 'http://localhost:8080/' : '/'
  }
  
  mergeOptions (options) { // 合并参数
    return {
      timeout: this.timeout,
      baseURL: this.baseURL,
      ...options
    }
  }
  
  setInterceptor (instance) {
    instance.interceptors.request.use((config) => {
      return config
    })
    
    instance.interceptors.response.use(res => {
      if (res.status === 200) {
        if (res.data.err === 1) {
          return Promise.reject(res.data.err)
        }
        return Promise.resolve(res.data.data)
        
      } else {
        // 401 403... 去判断每个状态码代表的含义
        return Promise.reject(res)
      }
      
      return Promise.resolve(res.data)
    }, error => {
      return Promise.reject(error)
    })
  }
  
  request (options) { // 用户的参数 + 默认参数 = 总共的参数
    const opts = this.mergeOptions(options)
    const axiosInstance = axios.create()
    
    // 添加拦截器
    this.setInterceptor(axiosInstance)
    
    // 当调用axios.request时候，内部会创建一个axios实例，并且给这个实例传入配置属性
    return axiosInstance(opts)
  }
  
  // 这两个方法只是对request方法 一个简写而已
  get (url, config={}) {
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
