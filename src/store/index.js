import Vue from 'vue'
import Vuex from 'vuex'

//挂载Vuex
Vue.use(Vuex)

//创建VueX对象
const store = new Vuex.Store({
    state: {
        // 侧边栏信息
        rightList: [],
        username: []
            // rightList: JSON.parse(sessionStorage.getItem('rightList') || '[]'),
            // username: sessionStorage.getItem('username')
    },
    mutations: {
        setRightList(state, data) {
            state.rightList = data
            sessionStorage.setItem('rightList', data)
        },
        setUsername(state, data) {
            state.username = data
            sessionStorage.setItem('username', data)
        }
    },
    actions: {

    }
})

export default store