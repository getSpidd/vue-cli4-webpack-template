// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const webpack = require("webpack");
// const isProd = process.env.NODE_ENV === 'production';
module.exports = {
    // 将部署应用程序的基本URL
    // 将部署应用程序的基本URL。
    // 默认情况下，Vue CLI假设您的应用程序将部署在域的根目录下。
    // https://www.my-app.com/。如果应用程序部署在子路径上，则需要使用此选项指定子路径。例如，如果您的应用程序部署在https://www.foobar.com/my-app/，集baseUrl到'/my-app/'.

    publicPath: process.env.NODE_ENV === 'production' ? './' : './',

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
        index: {
            //entry for the page
            entry: 'src/main.js',
            //the source template
            template: 'public/index.html',
            //output as dist/index.html
            filename: 'index.html'
        },
        // when using the entry-only string format,
        // template is inferred to be `public/subpage.html`
        // and falls back to `public/index.html` if not found.
        // Output filename is inferred to be `subpage.html`.
        // subpage: 'src/subpage/main.js'
    },

    //   lintOnSave：{ type:Boolean default:true } 问你是否使用eslint
    lintOnSave: true,
    // productionSourceMap：{ type:Bollean,default:true } 生产源映射
    // 如果您不需要生产时的源映射，那么将此设置为false可以加速生产构建
    productionSourceMap: false,
    // devServer:{type:Object} 3个属性host,port,https
    // 它支持webPack-dev-server的所有选项

    devServer: {
        port: 8090, // 端口号
        host: '0.0.0.0', // 本地和局域网
        // host: 'localhost', // 只有本地
        https: false, // https:{type:Boolean}
        open: false, //配置自动启动浏览器
        // proxy: 'http://localhost:4000' // 配置跨域处理,只有一个代理
    },
    configureWebpack: config => {
        // 移除 prefetch 插件
        // config.plugins.delete('prefetch')

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
        //注=======  图片路径错误，会导致打包失败。
        /*额外支持一项黑科技：
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

        // config.module.rules.push({
        //     // 处理css
        //     test: /\.css$/,
        //     use: [{
        //         loader: MiniCssExtractPlugin.loader,
        //         options: {
        //             // you can specify a publicPath here
        //             // by default it use publicPath in webpackOptions.output
        //             publicPath: '../'
        //         }
        //     },"css-loader"]
        // })
        // config.module.rules.push({
        //     // 处理jquery
        //     test: require.resolve('jquery'),
        //     use: [{
        //         loader: 'expose-loader',
        //         options: 'jquery'
        //     }, {
        //         loader: 'expose-loader',
        //         options: '$'
        //     }, {
        //         loader: 'expose-loader',
        //         options: 'jQuery'
        //     }]
        // })

        // config
        //     .plugin('html')
        //     .tap(args => {
        //         args[0].template = '/Users/username/proj/app/templates/index.html'
        //         return args
        //     })

    },
    // externals: {   // 打包时不打包以下依赖
    //     jquery: "$"
    // },
    css: {
        // // 是否使用css分离插件 ExtractTextPlugin
        // extract: true,
        // // 开启 CSS source maps?
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
}