import router from './router'
import store from './store'

// 白名单
const whiteList = ['/login']

router.beforeEach(async (to, from, next) => {
  // 获取token
  const token = store.getters.token
  if (token) {
    if (to.path === '/login') {
      next(from.path)
    } else {
      // next()
      const response = await store.dispatch('user/getUserInfo')
      console.log(response)
      if (response) {
        next()
      } else {
        next('/login')
      }
    }
  } else {
    if (whiteList.includes(to.path)) {
      next()
    } else {
      next('/login')
    }
  }
})
