import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

if (process.env.NODE_ENV !== 'production') {
  require('./mock')
}

Vue.directive('has', { // v-has='edit'
  inserted(el, bindings, vnode){
    const exists = vnode.context.$store.state.user.btnPermission[bindings.value]
    if (!exists) {
      el.parentNode.removeChild(el)
    }
  }
})

Vue.config.productionTip = false

Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
