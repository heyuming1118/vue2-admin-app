import Layout from '@/Layout'
import Home from '@/views/home'
import { getRoles } from '@/api/sys'


export default {
    path: '/',
    redirect: '/home',
    component: Layout,
    children: [
        {
            path: 'home',
            name: 'Home',
            component: Home,
            meta: {
                title: '首页',
                cache: false,
                hidden: false,
                roles: []
            }
        },
        {
            path: 'datacenter',
            name: 'Datacenter',
            component: () => import(/* webpackChunkName: "datacenter" */ '@/views/datacenter'),
            meta: {
                title: '数据中心',
                cache: false,
                hidden: false,
                roles: getRoles()
            }
        },
        {
            path: 'system',
            name: 'System',
            component: () => import(/* webpackChunkName: "system" */ '@/views/system'),
            meta: {
                title: '系统设置',
                cache: false,
                hidden: false,
                roles: getRoles()
            }
        },
        {
            path: 'noPermission',
            name: 'NoPermission',
            component: () => import(/* webpackChunkName: "noPermission" */ '@/views/noPermission'),
            meta: {
                title: '测试没有权限的页面',
                cache: false,
                hidden: false,
                roles: getRoles()
            }
        },
    ]

}