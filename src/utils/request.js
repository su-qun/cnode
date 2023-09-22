import axios from 'axios'
// import router from "../router/index"

// 创建一个新的 axios 实例 来当做我们的 axios
const instance = axios.create({
    baseURL: 'https://cnodejs.org/api/v1',
    timeout: 5000,
});

//请求除了登录请求之外的请求都必须设置请求头请求头要带 token
// 用户每次重新登录会生产一个新 touken 在登陆时存到 localStorage 中
// 设置请求拦截器 将请求的所有请求头添加 token
// token 后端会设置过期 或不过期
// 如果设置过期时间，过期后再发请求会失败，错误提示 401 (token 过期)
instance.interceptors.response.use((config) => {
    const token = localStorage.getItem('token')
    if(token){
        config.headers.Authorization = token
    }
    return config
})

// 响应拦截器
instance.interceptors.response.use(res => {
    // 根据后端错误码提示对应信息
    // if(res.token == 401){
    //     提示登录过期
    // }
    return res.data
})

export const getAction = (url, data) => instance({
    method: 'GET',
    url,
    params:data
})

export const postAction = (url, data) => instance({
    method: 'POST',
    url,
    data,
    // headers
})

export const deleteAction = (url, data) => instance({
    method: 'DELETE',
    url,
    data,
})

export const patchAction = (url,data) => instance({
    method: 'PATCH',
    url,
    data,
})

export default instance


