import Vue from 'vue'
// 引入 ElementUI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

import App from './App'
import router from './router'
import store from './store'
import '@/icons' // icon
import '@/permission' // 权限

Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,   // 引入路由
  store,    // 引入store对象
  template: '<App/>',
  components: { App }
})
