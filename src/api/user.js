import request from '@/utils/request'

const getUserInfo = (data) => {
  return request({
    url: '/sys/login',
    method: 'POST',
    data
  })
}
export default {
  getUserInfo
}
