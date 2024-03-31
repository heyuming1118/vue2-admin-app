import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'
// 读取 routes 下所有文件
const routeFile = require.context('./routes', true, /\.js/)

// 重复点击报错
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}
Vue.use(VueRouter)


const routes = [
    ...routeFile.keys().reduce((routes, file) => routes.concat(routeFile(file).default), []),
    {
        path: '/error/:code',
        name: 'ErrorPage',
        component: () => import('@/views/error'),
        meta: {
            title: '出错啦！'
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

router.beforeEach((to, from, next) => {
    // if (to.meta.roles && to.meta.roles.length) {
    //     if (!to.meta.roles.includes(store.state.user.role)) {
    //         return next('/error/403')
    //     }
    // }
    // 错误页面直接放行
    if (to.path.includes('error')) return next()
    // 拦截不在权限列表中的页面
    if (!(to.path in store.state.app.permissionMenu)) return next('/error/403')
    next()
})

router.afterEach((to, from) => {
    document.title = to.meta.title || 'admin'
})

export default router




