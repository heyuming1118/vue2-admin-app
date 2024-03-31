export default {
    namespaced: true,
    state() {
        return {
            user: {},
            token: '',
            role: ''
        }
    },
    mutations: {
        SET_USER(state, user) {
            state.user = user
        },
        SET_TOKEN(state, token) {
            state.token = token
        },
        SET_ROLE(state, data) {
            state.role = data
        },
    },
    actions: {
        setUser({ commit }, data) {
            commit('SET_USER', data)
        },
        setToken({ commit }, token) {
            commit('SET_TOKEN', token)
        },
        setRole({ commit }, data) {
            commit('SET_ROLE', data)
        },
    },
}