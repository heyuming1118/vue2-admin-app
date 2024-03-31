import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import ElementUI from 'element-ui';
import Directives from './directives';
import 'element-ui/lib/theme-chalk/index.css';
import 'normalize.css'
import './api/sys.mock'; // 引入Mock.js配置文件

import { auth } from './lib/auth'
import { onAppErrorBoundary } from './lib/portal'
import { getRoles } from '@/api/sys'

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(Directives)

try {
  auth().then(setup)
} catch (error) {
  onAppErrorBoundary(error)
}


function setup({ user, token, menu }) {
  store.dispatch('user/setUser', user)
  store.dispatch('user/setToken', token)
  store.dispatch('user/setRole', getRoles(1))
  store.dispatch('app/setmenus', menu)

  const app = new Vue({
    router,
    store,
    render: h => h(App)
  })

  app.$mount('#app')
}


