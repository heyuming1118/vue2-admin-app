import Mock from 'mockjs'


Mock.setup({
    timeout: '1000-2000', // 设置响应时间随机范围
});

Mock.mock("api/login", {
    code: 200,
    msg: '登陆成功',
    data: {
        user: {
            name: "@cname",
            age: '@integer(20, 50)',
            address: "@country(true)",
        },
        token: '@id dfgsd3gfg8dyfds23yfhsdfjfhdf='
    }
})


Mock.mock("api/findMenu", {
    code: 200,
    msg: '成功',
    data: [
        {
            id: '1',
            path: '/home',
            name: 'Home',
            title: '首页',
            icon: 'el-icon-menu',
        },
        {
            path: null,
            id: '2',
            title: '关于我们',
            icon: 'el-icon-location',
            children: [
                {
                    id: '2-1',
                    path: '/abort/location',
                    name: 'Location',
                    title: '地址信息',
                },
                {
                    path: null,
                    id: '2-2',
                    title: '发展历史',
                    children: [
                        {
                            id: '2-2-1',
                            path: '/abort/history/timeline',
                            name: 'Timeline',
                            title: '时间线',
                        }
                    ]
                },
            ]
        },
        {
            id: '3',
            path: '/datacenter',
            name: 'Datacenter',
            title: '数据中心',
            icon: 'el-icon-document',
        },
        {
            id: '4',
            path: '/system',
            name: 'System',
            title: '系统设置',
            icon: 'el-icon-setting',
        },
    ]

})

if (process.env.NODE_ENV === 'development') {
    Mock.setup(); // 在开发环境中启用Mock.js
}
