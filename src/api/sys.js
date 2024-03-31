import http from '@/lib/http'

export function getUser() {
    return http.get('login')
}

export function logout() {
    return http.get('logout')
}

export function getMenu() {
    return http.get('findMenu')
}

const r = () => Math.round(Math.random() * 2)
const roles = ['超级管理员', '管理员', '专员']
export function getRoles(num) {
    if (num) return roles[r()]
    return roles.slice(0, r())
}