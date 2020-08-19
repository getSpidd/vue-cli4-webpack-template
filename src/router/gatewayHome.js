const gatewayHomeRouter = [
  {
    name: 'test',
    title: 'test',
    path: '/test',
    component: () => import(/* webpackChunkName: "test" */ '@/views/test/index.vue'),
    children: [
      {
        name: 'test1',
        title: 'test1',
        path: 'test',
        component: () => import(/* webpackChunkName: "test" */ '@/views/test/index.vue')
      }
    ]
  }
]
export default gatewayHomeRouter
