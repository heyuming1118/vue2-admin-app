import store from "../store"
export default {
    inserted(el, binding) {
        const { value: rule } = binding
        const { role } = store.state.user
        let hasPermission = true
        if (Array.isArray(rule)) {
            hasPermission = rule.includes(role)
        } else if (typeof rule === 'function') {
            hasPermission = rule(role)
        } else {
            throw new Error('错误：v-permission 指令的参数是一个数组或函数')
        }
        if (!hasPermission) {
            el.parentNode && el.parentNode.removeChild(el)
        }
    }
}