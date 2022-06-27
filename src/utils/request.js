import axios from 'axios'
// 添加请求拦截器
import md5 from 'md5'

import loading from './loading'

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
})

service.interceptors.request.use(
  function (config) {
    // 打开loading
    loading.open()

    const { icode, time } = getTestICode()
    config.headers.icode = icode
    config.headers.codeType = time
    // 在请求发送之前做一些事情
    return config
  },
  function (error) {
    // 关闭loading
    loading.close()
    // 做一些请求错误的事情
    return Promise.reject(error)
  }
)

// 添加响应拦截器
service.interceptors.response.use(
  function (response) {
    // 关闭loading
    loading.close()
    // 对响应数据执行操作
    return response
  },
  function (error) {
    // 关闭loading
    loading.close()
    // 对响应错误执行操作

    return Promise.reject(error)
  }
)
// 统一了传参处理
const request = (options) => {
  if (options.method.toLowerCase() === 'get') {
    options.params = options.data || {}
  }
  return service(options)
}

// 实现code
function getTestICode() {
  const now = parseInt(Date.now() / 1000)
  const code = now + 'LGD_Sunday-1991'
  return {
    icode: md5(code),
    time: now
  }
}
export default request
