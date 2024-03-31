
export default {
    namespaced: true,
    state() {
        return {
            menus: [],
            permissionMenu:{}
        }
    },
    getters: {
        menus(state) {
            return state.menus
        }
    },
    mutations: {
        SET_MENU(state, data) {
            state.menus = data
        },
        SET_PERMISSION_MEUN(state,data = []){
            const permissionMenu = {}
            const findTreeNode = (data)=>{
                data.forEach(item=>{
                    if(!item.children || !item.children.length){
                        permissionMenu[item.path] = {}
                    }else{
                        findTreeNode(item.children)
                    }
                })
            }
            findTreeNode(data)
            state.permissionMenu = permissionMenu
        }
    },
    actions: {
        setmenus({ commit }, data) {
            commit('SET_MENU', data)
            commit('SET_PERMISSION_MEUN', data)
        }
    },
}