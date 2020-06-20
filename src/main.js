import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'

import 'element-ui/lib/theme-chalk/index.css'
import components from '@/utils/components.js'
Vue.use(components)
Vue.use(ElementUI)
import axios from 'axios'
Vue.prototype.$http = axios
import store from './store/index'
// Vue.prototype.$http.defaults.baseURL = '' //`baseURL` 将自动加在 `url` 前面，除非 `url` 是一个绝对 URL
import router from './router/index'
import echarts from 'echarts'
Vue.prototype.$echarts = echarts
Vue.config.productionTip = false
new Vue({
	render: h => h(App),
	router,
	store,
}).$mount('#app')
