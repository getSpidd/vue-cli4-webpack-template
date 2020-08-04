import store from '@/store'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import router, { whiteList } from '@/router'
import config from '@/config'
import createRoutes from '@/utils/createRoutes'
import { getDocumentTitle, resetTokenAndClearUser } from '@/utils'
const { homeName } = config

// 是否有菜单数据
router.beforeEach(async (to, from, next) => {
  // 动态修改网页标题
  document.title = getDocumentTitle(to.meta.title)
  // 进度条 show
  NProgress.start()

  // 登录后的用户有token
  const hasToken = sessionStorage.getItem('Authorization')
  if (!hasToken) {
    if (to.path === '/login' || to.path === '/') {
      next({ path: homeName })
      NProgress.done()
    } else if (store.state.user.isMountedRoutes) {
      next()
      NProgress.done()
    } else {
      try {
        // 这里可以用 await 配合请求后台数据来生成路由
        // const data = await axios.get('xxx')
        // const routes = createRoutes(data)
        let navData = [{ name: 'test' }] // 后台接口返回的导航数据
        const routes = createRoutes(navData)
        // 动态添加路由
        router.$addRoutes(routes)
        // console.log(router.options.routes)
        store.commit('user/SET_IS_MOUNTED_ROUTES', true)
        next({ path: to.path || '/' })
        NProgress.done()
      } catch (error) {
        resetTokenAndClearUser()
        next(`/login?redirect=${to.path}`)
        NProgress.done()
      }
    }
  } else {
    store.commit('user/SET_IS_MOUNTED_ROUTES', false)
    // 白名单直接里边请
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      // 其他无权限的重定向到登录页
      next('/login')
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  NProgress.done()
})
