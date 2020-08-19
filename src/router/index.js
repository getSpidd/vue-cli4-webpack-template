import Vue from 'vue'
import VueRouter from 'vue-router'
import gatewayHomeRouter from './gatewayHome'
Vue.use(VueRouter)

// 不需要权限的白名单path
const whiteList = [
  '/error',
  '/login'
]
// 不需要权限的路由
const commonRoutes = [
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "Login" */ '@/views/common/Login.vue')
  },
  {
    path: '/quit',
    name: 'quit',
    component: () => import(/* webpackChunkName: "quit" */ '@/views/common/Quit.vue')
  },
  {
    path: '/error/:id',
    name: '异常',
    component: () => import(/* webpackChunkName: "404" */ '@/views/common/404.vue')
  }
]
const asyncRoutes = gatewayHomeRouter
const createRouter = () =>
  new VueRouter({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes: commonRoutes
  })

const router = createRouter()
router.$addRoutes = (params) => {
  router.matcher = new VueRouter({ mode: 'hash' }).matcher
  router.options.routes = params
  router.addRoutes(params)
}
// 写一个重置路由的方法，切换用户后，或者退出时清除动态加载的路由
const resetRouter = function resetRouter () {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // 新路由实例matcer，赋值给旧路由实例的matcher，（相当于replaceRouter）
}
export {
  asyncRoutes,
  commonRoutes,
  whiteList,
  resetRouter
}
export default router
