import { asyncRoutes, commonRoutes } from '@/router'
// 判断是否有权限
function hasPermission (roles, route) {
  if (route.meta && route.meta.identity) {
    return roles.some(role => route.meta.identity.includes(role))
  } else {
    return true
  }
}
// 过滤出有权限的路由
export function filterAsyncRoutes (routes, roles) {
  const res = []
  routes.forEach(route => {
    const tmp = { ...route }
    if (hasPermission(roles, tmp)) {
      if (tmp.children) {
        tmp.children = filterAsyncRoutes(tmp.children, roles)
      }
      res.push(tmp)
    }
  })
  return res
}
const user = {
  namespaced: true,
  state: {
    routes: [],
    addRoutes: [],
    isMountedRoutes: false
  },
  getters: {},
  mutations: {
    SET_ROUTES: (state, routes) => {
      state.addRoutes = routes // 把之前的路由和后过滤出来的路由拼接起来一个新数组
      state.routes = commonRoutes.concat(routes)
    },
    SET_IS_MOUNTED_ROUTES (state, isMountedRoutes) {
      state.isMountedRoutes = isMountedRoutes
    }
  },
  actions: {
    // 构建路由的函数
    async generateRoutes ({ commit }, roles) {
      return new Promise(resolve => {
        let accessedRoutes
        if (roles.includes(5)) {
          // 判断用户类型  是否加载权限
          accessedRoutes = asyncRoutes || []
        } else {
          accessedRoutes = filterAsyncRoutes(asyncRoutes, roles)
        }
        commit('SET_ROUTES', accessedRoutes)
        resolve(user.state.routes)
      })
    },
    COMMIT_LOGOUT ({ commit }, roles) {}
  }
} // 导出供使用
export default user
