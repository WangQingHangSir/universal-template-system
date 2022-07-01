import request from '@/utils/request'

// 登录接口
const login = (data) => {
  return request({
    url: '/sys/login',
    method: 'POST',
    data
  })
}
// 获取用户信息接口
const getUserInfo = () => {
  return request({ url: '/sys/profile', method: 'get' })
}
export default {
  login,
  getUserInfo
}
