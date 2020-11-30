import store from '../store/index'
import * as types from '../store/action-types'

export default {
  // 名字公司给用户看
  'cancelToken': async function(to, from, next){ // beforeEach的方法在这里
    console.log(' -> ', )
    store.state.ajaxTokens.forEach(fn => fn()) // 取消上一次页面发送的请求
    
    // 取消完之后设置ajaxTokens = []
    store.commit(types.SET_REQUEST_TOKEN, 'clear')
    next()
  }
}
