import Vue from 'vue'
import Vuex from 'vuex'
import rootModule from './rootModule'

Vue.use(Vuex)

// 模块需要划分

// require.context 读取文件目录 构造出需要的结构
// const files = require.context('./modules', false, /\.js$/)
// // 自动根据当前store中的模块名解析vuex中的状态
// files.keys().forEach(key => { // [./article.js, ./user.js]
//   let moduleName = key.replace(/\.\//, '').replace(/\.js/, '')
//   let store = files(key).default; // node语法 想获取es6的结果
//   let module = (rootModule.modules || {})
//   module.modules[moduleName] = store
//   // 命名空间
//   module[moduleName].namespaced = true
// })

export default new Vuex.Store(rootModule)
