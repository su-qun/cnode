import axios from 'axios'

// 创建一个新的 axios 实例 来当做我们的 axios
const instance = axios.create({
    baseURL: 'https://cnodejs.org/api/v1 ',
    timeout: 5000,
});


// 响应拦截器
instance.interceptors.response.use(res => {
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


