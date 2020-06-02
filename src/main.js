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

  // 引入路由
  router,   

  // 引入store对象
  // 为了在 Vue 组件中访问 this.$store property，你需要为 Vue 实例提供创建好的 store。
  store,
  template: '<App/>',
  components: { App }
})
