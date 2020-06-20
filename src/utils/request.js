import axios from 'axios'



// 根据环境变量区分接口地址
//  package.json中
// "scripts": {
// "serve": "vue-cli-service serve",
// "server:producitn":"set NODE_EVN=productin&&vue-cli-serviece serve"
// "build": "vue-cli-service build",
// "lint": "vue-cli-service lint"
// },
// npm run server:producitn 运行
// switch (process.env.NODE_ENV) {
//     // 生产
//     case "production":
//         axios.defaults.baseURL = ''
//         break;
//         // 测试
//     case 'tset':
//         axios.defaults.baseURL = ''
//         break;
//         //
//     default:
//         axios.defaults.baseURL = ''
//         break;

// }
// 设置超时时间
// axios.defaults.timeout = 10000;
// // 设置是否允许跨域
// axios.defaults.withCredentials = true;

// 设置数据传递格式 可有可无
// axios.defaults.headers.post['Content-Type'] = 'application/json; charset=utf-8';

//创建一个axios对象  
const instance = axios.create({
        baseURL: 'http://192.168.0.18:10001/', //baseURL会在发起请求的时候自动拼接在url前面
        timeout: 5000
    })
    // axios.defaults.validateStatus = status => {
    //     //自定义响应http状态码
    //     return /^(2|3)\d{2}$/.test(status)
    // }
    // 请求拦截
    // TOKEN校验 接收到服务器返回的token 存储到本地vuex/本地储存
instance.interceptors.request.use(
        config => {
            // console.group('全局请求拦截')
            // console.log(config)
            // console.groupEnd()
            // config.headers.token = ''
            //携带上token
            // let url = config.url
            // if (url !== 'login') {
            //     if (url.headers.Authorization = sessionStorage.getItem('token')) {
            //         console.log('token验证成功')
            //     } else {
            //         // 跳转登录页
            //     }
            // }
            return config
        },

        err => {
            return Promise.reject(err)
        }
    )
    // 响应拦截
    //根据服务器状态码做响应处理
instance.interceptors.response.use(
    function(res) {
        return res.data
    },

    function(err) {
        let { response } = err
        if (response) {
            // 服务器返回结果
            switch (response.status) {
                case 401: //需要验证用户(一般是未登录)
                    // 跳转登录页
                    break;
                case 403: //服务器理解请求单拒绝(token过期)
                    break;
                case 404: //
                    break;
            }
        } else {
            // 服务器崩溃或者断网
            if (!window.navigator.onLine) {
                // 断网处理  可以跳转到断网页面
                return
            }
        }
        return Promise.reject(err)
    }
)

export function get(url, params) {
    return instance.get(url, {
        params
    })
}
export function post(url, data) {
    return instance.post(url, data)
}
export function put(url, data) {
    return instance.put(url, data)
}
export function del(url, data) {
    return instance.del(url, data)
}