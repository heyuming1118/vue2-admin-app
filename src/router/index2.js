import Vue from 'vue'
import VueRouter from 'vue-router'

import Layout from '@/Layout'

// 重复点击报错
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
Vue.use(VueRouter)

export function getRouter(menu = []) {
  const asynRoutes = []
  const forEachMenuTree = (menu) => {
    menu.forEach(item => {
      if (item.children && item.children.length) {
        forEachMenuTree(item.children)
      } else {
        asynRoutes.push({
          path: item.path,
          name: item.name || '',
          meta: {
            title: item.title,
            hidden: item.hidden || false,
            roles:item.roles
          },
          component: () => import(`../views${item.path}`)
        })
      }
    })
  }
  forEachMenuTree(menu)

  const routes = [
    {
      path: '/',
      component: Layout,
      redirect: asynRoutes[0].path,
      children:asynRoutes
    },
    {
      path: '/error/:code',
      name: 'ErrorPage',
      component: () => import('@/views/error'),
      meta:{
        title:'出错啦！'
      }
    },
    {
      path: '*',
      redirect: '/error/404'
    },
  ]
  const router = new VueRouter({
    routes,
    scrollBehavior(to, from, savedPosition) {
      if (savedPosition) return savedPosition
      // 始终滚动到顶部
      return { y: 0 }
    },
  })

  router.afterEach((to,from)=>{
    document.title = to.meta.title || 'admin'
  })

  return router
}



