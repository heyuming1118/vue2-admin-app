import Layout from '@/Layout'
import { getRoles } from '@/api/sys'


export default {
    path: '/abort',
    redirect: '/abort',
    component: Layout,
    children: [
        {
            path: 'history/timeline',
            name: 'Timeline',
            component: () => import(/* webpackChunkName: "timeline" */ '@/views/abort/history/timeline'),
            meta: {
                title: '时间线',
                cache: false,
                hidden: false,
                roles: getRoles()
            }
        },
        {
            path: 'location',
            name: 'Location',
            component: () => import(/* webpackChunkName: "system" */ '@/views/abort/location'),
            meta: {
                title: '地址信息',
                cache: false,
                hidden: false,
                roles: getRoles()
            }
        },
    ]

}