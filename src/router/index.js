import Vue from 'vue' //如果已引用，不需要重复引用
import Router from 'vue-router'; //如果已引用，不需要重复引用
import NotFound from '../components/noFound'
Vue.use(Router) //如果已引用，不需要重复引用

const router = new Router({
	mode: 'history',
	routes: [{
			// 登录页
			path: '/login',
			name: 'login',
			component: resolve => (require(["@/pages/login/login"], resolve))
		},
		{
			path: '/',
			redirect: '/home'
		},
		{
			path: '/home',
			name: 'home',
			redirect: '/index',
			component: resolve => (require(["@/pages/home/home"], resolve)),
			children: [{
				path: '/index',
				name: "首页",
				component: resolve => (require(["@/pages/home/index"], resolve)),
			}, {
				path: '/welcome',
				name: "欢迎页面",
				component: resolve => (require(["@/pages/home/welcome"], resolve)),
			}, {
				path: '/user',
				name: "用户管理",
				component: resolve => (require(["@/pages/home/user"], resolve)),
			}, {
				path: '/roles',
				name: "规则管理",
				component: resolve => (require(["@/pages/home/roles"], resolve)),
			}, ]
		},
		{
			path: '/noFound',
			name: 'noFound',
			component: resolve => (require(["../components/noFound"], resolve))
		},
		{
			path: '*',
			component: NotFound
		}

		// {
		//     // 首页
		//     path: '/home',
		//     name: 'home',
		//     component: home,
		//     children: [{
		//             path: 'tab',
		//             name: 'tab',
		//             component: resolve => (require(["@/pages/content/table"], resolve))
		//         },
		//         {
		//             path: 'froms',
		//             name: 'froms',
		//             component: resolve => (require(["@/pages/content/form"], resolve))
		//         }
		//     ]
		// },


	]
});
// router.beforeEach((to, from, next) => {
//     console.log(to.path)
//     if (to.path === '/login') {
//         next()
//     } else {
//         const token = sessionStorage.getItem('token')
//         if (!token) {
//             next('/login')
//         } else {
//             next()
//         }
//     }
//     next()
// })
export default router
