// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require('webpack')
const path = require('path')
const IS_PROD = process.env.NODE_ENV === 'production'
const IS_analyzer = process.env.BRANCH === 'analyzer'
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin // 打包分析
const CompressionWebpackPlugin = require('compression-webpack-plugin') // gzip 压缩
const productionGzipExtensions = ['js', 'html', 'css']
const cdn = {
  css: [
    'https://cdn.bootcdn.net/ajax/libs/nprogress/0.2.0/nprogress.min.css'
  ],
  js: [
    'https://cdn.bootcss.com/jquery/3.3.1/jquery.js',
    'https://cdn.bootcss.com/vue/2.6.11/vue.runtime.min.js',
    'https://cdn.bootcss.com/vue-router/3.1.3/vue-router.min.js',
    'https://cdn.bootcss.com/vuex/3.1.3/vuex.min.js',
    'https://cdn.bootcdn.net/ajax/libs/vue-i18n/7.8.0/vue-i18n.min.js',
    'https://cdn.bootcdn.net/ajax/libs/nprogress/0.2.0/nprogress.min.js'
  ]
}
const resolve = function (dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  // 将部署应用程序的基本URL
  // 将部署应用程序的基本URL。
  // 默认情况下，Vue CLI假设您的应用程序将部署在域的根目录下。
  // https://www.my-app.com/。如果应用程序部署在子路径上，则需要使用此选项指定子路径。例如，如果您的应用程序部署在https://www.foobar.com/my-app/，集baseUrl到'/my-app/'.

  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',

  // outputDir: 在npm run build时 生成文件的目录 type:string, default:'dist'

  outputDir: 'dist',

  assetsDir: '',

  // pages:{ type:Object,Default:undfind }
  /*
    构建多页面模式的应用程序.每个“页面”都应该有一个相应的JavaScript条目文件。该值应该是一
    个对象，其中键是条目的名称，而该值要么是指定其条目、模板和文件名的对象，要么是指定其条目
    的字符串，
    注意：请保证pages里配置的路径和文件名 在你的文档目录都存在 否则启动服务会报错的
    */
  pages: {
    app: {
      // 入口文件，相对于多页面应用的main.js，必需。
      entry: 'src/main.js',
      // 应用的模板，相当于单页面应用的public/index.html，非必须，省略时默认与模块名一致。
      template: 'public/index.html',
      // o 编译后 dist目录中输出的文件名，非必须，省略时默认与模块名一致。
      filename: 'index.html'
      // chunks: ['src1']
    }
    /* ---------------开启多页面应用-------------------- */
    /* src2: {
            // 入口文件，相对于多页面应用的main.js，必需。
            entry: 'src1/main.js',
            // 应用的模板，相当于单页面应用的public/index.html，非必须，省略时默认与模块名一致。
            template: 'public/index1.html',
            //o 编译后 dist目录中输出的文件名，非必须，省略时默认与模块名一致。
            filename: 'index1.html',
            // 当使用 title 选项时，
            // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
            title: 'src1',
            // 在这个页面中包含的块，默认情况下会包含
            // 提取出来的通用 chunk 和 vendor chunk。
            // chunks: ['chunk-vendors', 'chunk-common', 'index']
        }, */
    // 只有entry属性时，直接用字符串表示模块入口，其他默认与模块名一致
  },

  //   lintOnSave：{ type:Boolean default:true } 问你是否使用eslint
  lintOnSave: true,
  // productionSourceMap：{ type:Bollean,default:true } 生产源映射
  // 如果您不需要生产时的源映射，那么将此设置为false可以加速生产构建
  productionSourceMap: !IS_PROD, // 生产环境的 source map
  // devServer:{type:Object} 3个属性host,port,https
  // 它支持webPack-dev-server的所有选项

  devServer: {
    port: 8090, // 端口号
    host: '0.0.0.0', // 本地和局域网
    // host: 'localhost', // 只有本地
    https: false, // https:{type:Boolean}
    open: false // 配置自动启动浏览器
    // 1) 代理 proxy: 'http://localhost:4000' // 配置跨域处理,只有一个代理
    /* proxy: {
            '/api': {
                target: 'http://localhost:4000', // API服务器的地址
                ws: true,  //代理 websockets
                changeOrigin: true, // 虚拟的站点需要更管origin
                pathRewrite: {   //重写路径 比如'/api/aaa/ccc'重写为'/aaa/ccc'
                    '/api': ''
                }
            }
        }, */
    // 2） 我们前端只想单纯来模拟数据
    // before(app){ // 提供的方法 钩子
    //   app.get('/user',(req,res)=>{
    //     res.json({name:'珠峰架构-before'})
    //   })
    // }
  },
  configureWebpack: config => {
    if (IS_PROD) {
      config.externals = {
        'jquery': '$',
        'vue': 'Vue',
        'vue-router': 'VueRouter',
        'vuex': 'Vuex',
        'vue-i18n': 'VueI18n',
        'nprogress': 'NProgress'
      }
      // config.plugins.push(new CompressionWebpackPlugin({
      //     algorithm: 'gzip',
      //     test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),  //匹配文件名
      //     threshold: 10240, //对超过10k的数据进行压缩
      //     minRatio: 0.8,
      //     deleteOriginalAssets: false //是否删除原文件
      // }));
      config.plugins.push(new webpack.BannerPlugin('gch 2020/3/17')) // 代码前面添加注释;
    }

    // 将css 分离打包
    // config.plugins.push(new MiniCssExtractPlugin({
    //     // Options similar to the same options in webpackOptions.output
    //     // both options are optional
    //     filename: "[name].css",
    //     chunkFilename: "[id].css"
    // }));

    // 将插件暴露到window中
    // config.plugins.push(new webpack.ProvidePlugin({
    //     $:'jquery'
    // }));
  },
  chainWebpack: config => {
    if (IS_PROD) {
      // 打包分析
      if (IS_analyzer) {
        config.plugin('webpack-report').use(BundleAnalyzerPlugin, [{
          analyzerMode: 'static'
        }])
      }
      // 生产环境注入cdn
      config.plugin('html-app').tap(args => {
        args[0].cdn = cdn
        return args
      })
      // 删除预加载
      config.plugins.delete('preload')
      config.plugins.delete('prefetch')
      // 压缩代码
      config.optimization.minimize(true)
      // 分割代码
      // config.optimization.splitChunks({
      //     chunks: 'all'
      // });

      // 公共资源提取，
      // vendors提取的是第三方公共库(满足提取规则的node_modules里面的且页面引入的)，这些文件会打到dist/js/chunk-vendors.js里面
      // 提取规则是每个页面都引入的才会打到chunk-vendors.js里面(如vue.js)
      // 控制条件是minChunks字段，所以该字段的值是当前activity/src/projects里面的html的个数
      // common提取的应该是除了vendors提取后，剩余的满足条件的公共静态模块
      // 我们的项目不需要common，所以将common置为{}，覆盖默认common配置
      /*
      config.optimization.splitChunks({
        cacheGroups: {
          vendors: {
            name: 'chunk-vendors',
            minChunks: 2,
            test: /node_modules/,
            priority: -10,
            chunks: 'initial'
          },
          common: {}
        }
      })
      */
    }
    // 修改loader 中关于images的设置
    // config.module
    //     .rule('images')
    //     .use('url-loader')
    //     .loader('url-loader')
    //     .tap(options => {
    //         options.limit = 9999; // 修改 不大于9999字节的图片不打包 base64转码
    //         options.publicPath = 'www.baidu.com'; // 对打包后的图片路径加上www.baidu.com
    //         // modify the options...
    //         return options
    //     });

    // 添加loader => 解析html中的图片。 <img src="./favicon.png"> => <img src="data:image/png;base64,AA....////8=">
    // 注=======  图片路径错误，会导致打包失败。
    /* 额外支持一项黑科技：
        <div>
            #include("./layout/top.html")
        </div>
        */
    // config.module
    //     .rule('html')
    //     .test(/\.(htm|html)$/i)
    //     .use('html-withimg-loader')
    //     .loader('html-withimg-loader')
    //     .end();

    // config.plugin('extract-css').use(MiniCssExtractPlugin);

    // 配置别名
    config.resolve.alias
      .set('@', resolve('src'))
      .set('assets', resolve('src/assets'))
      .set('components', resolve('src/components'))
      .set('utils', resolve('src/utils'))
      .set('api', resolve('src/api'))
  },
  // externals: {   // 打包时不打包以下依赖
  //     jquery: "$"
  // },
  css: {
    // // 是否使用css分离插件 ExtractTextPlugin
    // extract: true,
    // 是否为CSS启用源映射。将此设置为true可能会影响构建性能
    // sourceMap: false,
    // // 启用 CSS modules for all css / pre-processor files.
    // modules: false,
    // css预设器配置项
    loaderOptions: {
      css: {},
      postcss: {
        plugins: [
          // require('postcss-px2rem')({
          //     remUnit: 37.5
          // })
        ]
      }
    }
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      injector: 'append',
      patterns: [
        path.resolve(__dirname, 'src/theme/z.less'),
        path.resolve(__dirname, 'src/theme/theme.less')
      ]
    }
  }
}
