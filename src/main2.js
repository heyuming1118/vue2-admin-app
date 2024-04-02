import Vue from 'vue'
import App from './App.vue'
import store from './store'
import { getRouter } from './router/index2.js'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'normalize.css'
import './api/sys.mock'; // 引入Mock.js配置文件

import { auth } from './lib/auth'
import { onAppErrorBoundary } from './lib/portal'

Vue.config.productionTip = false

Vue.use(ElementUI)

try {
  auth().then(setup)
} catch (error) {
  onAppErrorBoundary(error)
}


function setup({ user, token, menu }) {
  store.dispatch('user/setUser', user)
  store.dispatch('user/setToken', token)
  store.dispatch('app/setmenus', menu)

  const app = new Vue({
    router: getRouter(menu),
    store,
    render: h => h(App)
  })

  app.$mount('#app')
}


