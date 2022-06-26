import {
  createRouter,
  createWebHashHistory
} from 'vue-router'

// 共有路由
const routes = [{
  path: '/login',
  name: 'login',
  component: () => import('../views/login/index.vue')
}]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
