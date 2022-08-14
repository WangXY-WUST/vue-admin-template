import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import elementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/style/index.css'
import router from '@/routes'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(elementUi)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
