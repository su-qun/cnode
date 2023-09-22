import { getAction,postAction } from '@/utils/request'

// 登录
export const login = (accesstoken) => postAction('/accesstoken', {accesstoken})
// 请求列表
export const getList = (params) => getAction('/topics', params)
// 详情
export const getTopic = (id) => getAction('topic/'+ id)



export const getUserInfo = loginname => getAction('user/'+ loginname)