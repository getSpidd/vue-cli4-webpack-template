const baseUrlFn = () => {
  let urls = ''
  let port = 80
  let env = process.env.NODE_ENV
  let targetPath = 'http://localhost'
  switch (env) {
    case 'development':
      urls = `${targetPath}:${port}`
      break
    case 'production':
      urls = `${targetPath}:${port}`
      break
    default :
      urls = `${targetPath}:${port}`
  }
  return urls
}

export default {
  /**
   * @description 配置显示在浏览器标签的title
   */
  title: '基于vue-cli4 完整项目配置',
  /**
   * @description token在Cookie中存储的天数，默认1天
   */
  cookieExpires: 1,
  cookieExpiresRefresh: 120, // 秒
  /**
   * @description 是否使用国际化，默认为false
   *              如果不使用，则需要在路由中给需要在菜单中展示的路由设置meta: {title: 'xxx'}
   *              用来在菜单中显示文字
   */
  useI18n: true,
  /**
   * @description api请求基础路径
   */
  baseUrl: baseUrlFn(),
  /**
   * @description 默认打开的首页的路由name值，默认为home
   */
  homeName: 'test',
  // 网关配置
  gateWay: {
    MANAGE: '/user-service' // 业务服务
  },
  /**
   * @description 需要加载的插件
   */
  plugin: {
    'error-store': {
      showInHeader: false, // 设为false后不会在顶部显示错误日志徽标
      developmentOff: true // 设为true后在开发环境不会收集错误信息，方便开发中排查错误
    }
  }
}
