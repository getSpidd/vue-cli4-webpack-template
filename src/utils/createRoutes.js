import { asyncRoutes, commonRoutes } from '@/router'

// 将菜单信息转成对应的路由信息 动态添加
export default function createRoutes (data) {
  const result = []

  result.push({
    path: '/',
    component: () => import('@/views/view.vue'),
    children: commonRoutes
  })

  result[0].children = result[0].children.concat(asyncRoutes)

  // 最后添加404页面 否则会在登陆成功后跳到404页面
  result.push(
    { path: '*', redirect: '/404' }
  )
  return result
}
