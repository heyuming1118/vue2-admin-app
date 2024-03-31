import { getUser, getMenu } from '@/api/sys'

export async function auth() {
    // 获取用户信息
    const user = await getUser()
    // 获取用户权限菜单
    const menu = await getMenu()

    return {
        user: user.user,
        token: user.token,
        menu
    }
}

