{
  mode: 'development',
      context
:
  'E:\\Spidd\\学习\\vue-cli4',
      node
:
  {
    setImmediate: false,
        process
  :
    'mock',
        dgram
  :
    'empty',
        fs
  :
    'empty',
        net
  :
    'empty',
        tls
  :
    'empty',
        child_process
  :
    'empty'
  }
,
  output: {
    path: 'E:\\Spidd\\学习\\vue-cli4\\dist',
        filename
  :
    'js/[name].js',
        publicPath
  :
    '',
        chunkFilename
  :
    'js/[name].js'
  }
,
  resolve: {
    alias: {
      '@'
    :
      'E:\\Spidd\\学习\\vue-cli4\\src',
          vue$
    :
      'vue/dist/vue.runtime.esm.js'
    }
  ,
    extensions: [  // 依次解析
      '.mjs',
      '.js',
      '.jsx',
      '.vue',
      '.json',
      '.wasm'
    ],
        modules
  :
    [
      'node_modules',
      'E:\\Spidd\\学习\\vue-cli4\\node_modules',
      'E:\\Spidd\\学习\\vue-cli4\\node_modules\\_@vue_cli-service@4.2.3@@vue\\cli-service\\node_modules'
    ],
        plugins
  :
    [
      /* config.resolve.plugin('pnp') */
      {}
    ]
  }
,
  resolveLoader: {
    modules: [
      'E:\\Spidd\\学习\\vue-cli4\\node_modules\\_@vue_cli-plugin-babel@4.2.3@@vue\\cli-plugin-babel\\node_modules',
      'node_modules',
      'E:\\Spidd\\学习\\vue-cli4\\node_modules',
      'E:\\Spidd\\学习\\vue-cli4\\node_modules\\_@vue_cli-service@4.2.3@@vue\\cli-service\\node_modules'
    ],
        plugins
  :
    [
      /* config.resolve.plugin('pnp-loaders') */
      {}
    ]
  }
,
  module: {
    noParse: /^(vue|vue-router|vuex|vuex-router-sync)$/,
        rules
  :
    [
      /* config.module.rule('vue') */
      {
        test: /\.vue$/,
        use: [
          /* config.module.rule('vue').use('cache-loader') */
          {
            loader: 'E:\\Spidd\\学习\\vue-cli4\\node_modules\\_cache-loader@4.1.0@cache-loader\\dist\\cjs.js',
            options: {
              cacheDirectory: 'E:\\Spidd\\学习\\vue-cli4\\node_modules\\.cache\\vue-loader',
              cacheIdentifier: 'ba19876e'
            }
          },
          /* config.module.rule('vue').use('vue-loader') */
          {
            loader: 'E:\\Spidd\\学习\\vue-cli4\\node_modules\\_vue-loader@15.9.0@vue-loader\\lib\\index.js',
            options: {
              compilerOptions: {
                whitespace: 'condense'
              },
              cacheDirectory: 'E:\\Spidd\\学习\\vue-cli4\\node_modules\\.cache\\vue-loader',
              cacheIdentifier: 'ba19876e'
            }
          }
        ]
      },
      /* config.module.rule('images') */
      {
        test: /\.(png|jpe?g|gif|webp)(\?.*)?$/,
        use: [
          /* config.module.rule('images').use('url-loader') */
          {
            loader: 'E:\\Spidd\\学习\\vue-cli4\\node_modules\\_url-loader@2.3.0@url-loader\\dist\\cjs.js',
            options: {
              limit: 4096,
              fallback: {
                loader: 'E:\\Spidd\\学习\\vue-cli4\\node_modules\\_file-loader@4.3.0@file-loader\\dist\\cjs.js',
                options: {
                  name: 'img/[name].[hash:8].[ext]'
                }
              }
            }
          }
        ]
      },
      /* config.module.rule('svg') */
      {
        test: /\.(svg)(\?.*)?$/,
        use: [
          /* config.module.rule('svg').use('file-loader') */
          {
            loader: 'E:\\Spidd\\学习\\vue-cli4\\node_modules\\_file-loader@4.3.0@file-loader\\dist\\cjs.js',
            options: {
              name: 'img/[name].[hash:8].[ext]'
            }
          }
        ]
      },
      /* config.module.rule('media') */
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        use: [
          /* config.module.rule('media').use('url-loader') */
          {
            loader: 'E:\\Spidd\\学习\\vue-cli4\\node_modules\\_url-loader@2.3.0@url-loader\\dist\\cjs.js',
            options: {
              limit: 4096,
              fallback: {
                loader: 'E:\\Spidd\\学习\\vue-cli4\\node_modules\\_file-loader@4.3.0@file-loader\\dist\\cjs.js',
                options: {
                  name: 'media/[name].[hash:8].[ext]'
                }
              }
            }
          }
        ]
      },
      /* config.module.rule('fonts') */
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/i,
        use: [
          /* config.module.rule('fonts').use('url-loader') */
          {
            loader: 'E:\\Spidd\\学习\\vue-cli4\\node_modules\\_url-loader@2.3.0@url-loader\\dist\\cjs.js',
            options: {
              limit: 4096,
              fallback: {
                loader: 'E:\\Spidd\\学习\\vue-cli4\\node_modules\\_file-loader@4.3.0@file-loader\\dist\\cjs.js',
                options: {
                  name: 'fonts/[name].[hash:8].[ext]'
                }
              }
            }
          }
        ]
      },
      /* config.module.rule('pug') */
      {
        test: /\.pug$/,
        oneOf: [
          /* config.module.rule('pug').oneOf('pug-vue') */
          {
            resourceQuery: /vue/,
            use: [
              /* config.module.rule('pug').oneOf('pug-vue').use('pug-plain-loader') */
              {
                loader: 'pug-plain-loader'
              }
            ]
          },
          /* config.module.rule('pug').oneOf('pug-template') */
          {
            use: [
              /* config.module.rule('pug').oneOf('pug-template').use('raw') */
              {
                loader: 'raw-loader'
              },
              /* config.module.rule('pug').oneOf('pug-template').use('pug-plain-loader') */
              {
                loader: 'pug-plain-loader'
              }
            ]
          }
        ]
      },
      /* config.module.rule('css') */
      {
        test: /\.css$/,
        oneOf: [
          /* config.module.rule('css').oneOf('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              /* config.module.rule('css').oneOf('vue-modules').use('vue-style-loader') */
              {
                loader: 'E:\\Spidd\\学习\\vue-cli4\\node_modules\\_vue-style-loader@4.1.2@vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              /* config.module.rule('css').oneOf('vue-modules').use('css-loader') */
              {
                loader: 'E:\\Spidd\\学习\\vue-cli4\\node_modules\\_css-loader@3.4.2@css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              /* config.module.rule('css').oneOf('vue-modules').use('postcss-loader') */
              {
                loader: 'E:\\Spidd\\学习\\vue-cli4\\node_modules\\_postcss-loader@3.0.0@postcss-loader\\src\\index.js',
                options: {
                  sourceMap: false,
                  plugins: []
                }
              }
            ]
          },
          /* config.module.rule('css').oneOf('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              /* config.module.rule('css').oneOf('vue').use('vue-style-loader') */
              {
                loader: 'E:\\Spidd\\学习\\vue-cli4\\node_modules\\_vue-style-loader@4.1.2@vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              /* config.module.rule('css').oneOf('vue').use('css-loader') */
              {
                loader: 'E:\\Spidd\\学习\\vue-cli4\\node_modules\\_css-loader@3.4.2@css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              /* config.module.rule('css').oneOf('vue').use('postcss-loader') */
              {
                loader: 'E:\\Spidd\\学习\\vue-cli4\\node_modules\\_postcss-loader@3.0.0@postcss-loader\\src\\index.js',
                options: {
                  sourceMap: false,
                  plugins: []
                }
              }
            ]
          },
          /* config.module.rule('css').oneOf('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              /* config.module.rule('css').oneOf('normal-modules').use('vue-style-loader') */
              {
                loader: 'E:\\Spidd\\学习\\vue-cli4\\node_modules\\_vue-style-loader@4.1.2@vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              /* config.module.rule('css').oneOf('normal-modules').use('css-loader') */
              {
                loader: 'E:\\Spidd\\学习\\vue-cli4\\node_modules\\_css-loader@3.4.2@css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              /* config.module.rule('css').oneOf('normal-modules').use('postcss-loader') */
              {
                loader: 'E:\\Spidd\\学习\\vue-cli4\\node_modules\\_postcss-loader@3.0.0@postcss-loader\\src\\index.js',
                options: {
                  sourceMap: false,
                  plugins: []
                }
              }
            ]
          },
          /* config.module.rule('css').oneOf('normal') */
          {
            use: [
              /* config.module.rule('css').oneOf('normal').use('vue-style-loader') */
              {
                loader: 'E:\\Spidd\\学习\\vue-cli4\\node_modules\\_vue-style-loader@4.1.2@vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              /* config.module.rule('css').oneOf('normal').use('css-loader') */
              {
                loader: 'E:\\Spidd\\学习\\vue-cli4\\node_modules\\_css-loader@3.4.2@css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              /* config.module.rule('css').oneOf('normal').use('postcss-loader') */
              {
                loader: 'E:\\Spidd\\学习\\vue-cli4\\node_modules\\_postcss-loader@3.0.0@postcss-loader\\src\\index.js',
                options: {
                  sourceMap: false,
                  plugins: []
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('postcss') */
      {
        test: /\.p(ost)?css$/,
        oneOf: [
          /* config.module.rule('postcss').oneOf('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              /* config.module.rule('postcss').oneOf('vue-modules').use('vue-style-loader') */
              {
                loader: 'E:\\Spidd\\学习\\vue-cli4\\node_modules\\_vue-style-loader@4.1.2@vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              /* config.module.rule('postcss').oneOf('vue-modules').use('css-loader') */
              {
                loader: 'E:\\Spidd\\学习\\vue-cli4\\node_modules\\_css-loader@3.4.2@css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              /* config.module.rule('postcss').oneOf('vue-modules').use('postcss-loader') */
              {
                loader: 'E:\\Spidd\\学习\\vue-cli4\\node_modules\\_postcss-loader@3.0.0@postcss-loader\\src\\index.js',
                options: {
                  sourceMap: false,
                  plugins: []
                }
              }
            ]
          },
          /* config.module.rule('postcss').oneOf('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              /* config.module.rule('postcss').oneOf('vue').use('vue-style-loader') */
              {
                loader: 'E:\\Spidd\\学习\\vue-cli4\\node_modules\\_vue-style-loader@4.1.2@vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              /* config.module.rule('postcss').oneOf('vue').use('css-loader') */
              {
                loader: 'E:\\Spidd\\学习\\vue-cli4\\node_modules\\_css-loader@3.4.2@css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              /* config.module.rule('postcss').oneOf('vue').use('postcss-loader') */
              {
                loader: 'E:\\Spidd\\学习\\vue-cli4\\node_modules\\_postcss-loader@3.0.0@postcss-loader\\src\\index.js',
                options: {
                  sourceMap: false,
                  plugins: []
                }
              }
            ]
          },
          /* config.module.rule('postcss').oneOf('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              /* config.module.rule('postcss').oneOf('normal-modules').use('vue-style-loader') */
              {
                loader: 'E:\\Spidd\\学习\\vue-cli4\\node_modules\\_vue-style-loader@4.1.2@vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              /* config.module.rule('postcss').oneOf('normal-modules').use('css-loader') */
              {
                loader: 'E:\\Spidd\\学习\\vue-cli4\\node_modules\\_css-loader@3.4.2@css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              /* config.module.rule('postcss').oneOf('normal-modules').use('postcss-loader') */
              {
                loader: 'E:\\Spidd\\学习\\vue-cli4\\node_modules\\_postcss-loader@3.0.0@postcss-loader\\src\\index.js',
                options: {
                  sourceMap: false,
                  plugins: []
                }
              }
            ]
          },
          /* config.module.rule('postcss').oneOf('normal') */
          {
            use: [
              /* config.module.rule('postcss').oneOf('normal').use('vue-style-loader') */
              {
                loader: 'E:\\Spidd\\学习\\vue-cli4\\node_modules\\_vue-style-loader@4.1.2@vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              /* config.module.rule('postcss').oneOf('normal').use('css-loader') */
              {
                loader: 'E:\\Spidd\\学习\\vue-cli4\\node_modules\\_css-loader@3.4.2@css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              /* config.module.rule('postcss').oneOf('normal').use('postcss-loader') */
              {
                loader: 'E:\\Spidd\\学习\\vue-cli4\\node_modules\\_postcss-loader@3.0.0@postcss-loader\\src\\index.js',
                options: {
                  sourceMap: false,
                  plugins: []
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('scss') */
      {
        test: /\.scss$/,
        oneOf: [
          /* config.module.rule('scss').oneOf('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              /* config.module.rule('scss').oneOf('vue-modules').use('vue-style-loader') */
              {
                loader: 'E:\\Spidd\\学习\\vue-cli4\\node_modules\\_vue-style-loader@4.1.2@vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              /* config.module.rule('scss').oneOf('vue-modules').use('css-loader') */
              {
                loader: 'E:\\Spidd\\学习\\vue-cli4\\node_modules\\_css-loader@3.4.2@css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              /* config.module.rule('scss').oneOf('vue-modules').use('postcss-loader') */
              {
                loader: 'E:\\Spidd\\学习\\vue-cli4\\node_modules\\_postcss-loader@3.0.0@postcss-loader\\src\\index.js',
                options: {
                  sourceMap: false,
                  plugins: []
                }
              },
              /* config.module.rule('scss').oneOf('vue-modules').use('sass-loader') */
              {
                loader: 'E:\\Spidd\\学习\\vue-cli4\\node_modules\\_sass-loader@8.0.2@sass-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          /* config.module.rule('scss').oneOf('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              /* config.module.rule('scss').oneOf('vue').use('vue-style-loader') */
              {
                loader: 'E:\\Spidd\\学习\\vue-cli4\\node_modules\\_vue-style-loader@4.1.2@vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              /* config.module.rule('scss').oneOf('vue').use('css-loader') */
              {
                loader: 'E:\\Spidd\\学习\\vue-cli4\\node_modules\\_css-loader@3.4.2@css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              /* config.module.rule('scss').oneOf('vue').use('postcss-loader') */
              {
                loader: 'E:\\Spidd\\学习\\vue-cli4\\node_modules\\_postcss-loader@3.0.0@postcss-loader\\src\\index.js',
                options: {
                  sourceMap: false,
                  plugins: []
                }
              },
              /* config.module.rule('scss').oneOf('vue').use('sass-loader') */
              {
                loader: 'E:\\Spidd\\学习\\vue-cli4\\node_modules\\_sass-loader@8.0.2@sass-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          /* config.module.rule('scss').oneOf('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              /* config.module.rule('scss').oneOf('normal-modules').use('vue-style-loader') */
              {
                loader: 'E:\\Spidd\\学习\\vue-cli4\\node_modules\\_vue-style-loader@4.1.2@vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              /* config.module.rule('scss').oneOf('normal-modules').use('css-loader') */
              {
                loader: 'E:\\Spidd\\学习\\vue-cli4\\node_modules\\_css-loader@3.4.2@css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              /* config.module.rule('scss').oneOf('normal-modules').use('postcss-loader') */
              {
                loader: 'E:\\Spidd\\学习\\vue-cli4\\node_modules\\_postcss-loader@3.0.0@postcss-loader\\src\\index.js',
                options: {
                  sourceMap: false,
                  plugins: []
                }
              },
              /* config.module.rule('scss').oneOf('normal-modules').use('sass-loader') */
              {
                loader: 'E:\\Spidd\\学习\\vue-cli4\\node_modules\\_sass-loader@8.0.2@sass-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          /* config.module.rule('scss').oneOf('normal') */
          {
            use: [
              /* config.module.rule('scss').oneOf('normal').use('vue-style-loader') */
              {
                loader: 'E:\\Spidd\\学习\\vue-cli4\\node_modules\\_vue-style-loader@4.1.2@vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              /* config.module.rule('scss').oneOf('normal').use('css-loader') */
              {
                loader: 'E:\\Spidd\\学习\\vue-cli4\\node_modules\\_css-loader@3.4.2@css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              /* config.module.rule('scss').oneOf('normal').use('postcss-loader') */
              {
                loader: 'E:\\Spidd\\学习\\vue-cli4\\node_modules\\_postcss-loader@3.0.0@postcss-loader\\src\\index.js',
                options: {
                  sourceMap: false,
                  plugins: []
                }
              },
              /* config.module.rule('scss').oneOf('normal').use('sass-loader') */
              {
                loader: 'E:\\Spidd\\学习\\vue-cli4\\node_modules\\_sass-loader@8.0.2@sass-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('sass') */
      {
        test: /\.sass$/,
        oneOf: [
          /* config.module.rule('sass').oneOf('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              /* config.module.rule('sass').oneOf('vue-modules').use('vue-style-loader') */
              {
                loader: 'E:\\Spidd\\学习\\vue-cli4\\node_modules\\_vue-style-loader@4.1.2@vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              /* config.module.rule('sass').oneOf('vue-modules').use('css-loader') */
              {
                loader: 'E:\\Spidd\\学习\\vue-cli4\\node_modules\\_css-loader@3.4.2@css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              /* config.module.rule('sass').oneOf('vue-modules').use('postcss-loader') */
              {
                loader: 'E:\\Spidd\\学习\\vue-cli4\\node_modules\\_postcss-loader@3.0.0@postcss-loader\\src\\index.js',
                options: {
                  sourceMap: false,
                  plugins: []
                }
              },
              /* config.module.rule('sass').oneOf('vue-modules').use('sass-loader') */
              {
                loader: 'E:\\Spidd\\学习\\vue-cli4\\node_modules\\_sass-loader@8.0.2@sass-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  sassOptions: {
                    indentedSyntax: true
                  }
                }
              }
            ]
          },
          /* config.module.rule('sass').oneOf('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              /* config.module.rule('sass').oneOf('vue').use('vue-style-loader') */
              {
                loader: 'E:\\Spidd\\学习\\vue-cli4\\node_modules\\_vue-style-loader@4.1.2@vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              /* config.module.rule('sass').oneOf('vue').use('css-loader') */
              {
                loader: 'E:\\Spidd\\学习\\vue-cli4\\node_modules\\_css-loader@3.4.2@css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              /* config.module.rule('sass').oneOf('vue').use('postcss-loader') */
              {
                loader: 'E:\\Spidd\\学习\\vue-cli4\\node_modules\\_postcss-loader@3.0.0@postcss-loader\\src\\index.js',
                options: {
                  sourceMap: false,
                  plugins: []
                }
              },
              /* config.module.rule('sass').oneOf('vue').use('sass-loader') */
              {
                loader: 'E:\\Spidd\\学习\\vue-cli4\\node_modules\\_sass-loader@8.0.2@sass-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  sassOptions: {
                    indentedSyntax: true
                  }
                }
              }
            ]
          },
          /* config.module.rule('sass').oneOf('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              /* config.module.rule('sass').oneOf('normal-modules').use('vue-style-loader') */
              {
                loader: 'E:\\Spidd\\学习\\vue-cli4\\node_modules\\_vue-style-loader@4.1.2@vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              /* config.module.rule('sass').oneOf('normal-modules').use('css-loader') */
              {
                loader: 'E:\\Spidd\\学习\\vue-cli4\\node_modules\\_css-loader@3.4.2@css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              /* config.module.rule('sass').oneOf('normal-modules').use('postcss-loader') */
              {
                loader: 'E:\\Spidd\\学习\\vue-cli4\\node_modules\\_postcss-loader@3.0.0@postcss-loader\\src\\index.js',
                options: {
                  sourceMap: false,
                  plugins: []
                }
              },
              /* config.module.rule('sass').oneOf('normal-modules').use('sass-loader') */
              {
                loader: 'E:\\Spidd\\学习\\vue-cli4\\node_modules\\_sass-loader@8.0.2@sass-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  sassOptions: {
                    indentedSyntax: true
                  }
                }
              }
            ]
          },
          /* config.module.rule('sass').oneOf('normal') */
          {
            use: [
              /* config.module.rule('sass').oneOf('normal').use('vue-style-loader') */
              {
                loader: 'E:\\Spidd\\学习\\vue-cli4\\node_modules\\_vue-style-loader@4.1.2@vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              /* config.module.rule('sass').oneOf('normal').use('css-loader') */
              {
                loader: 'E:\\Spidd\\学习\\vue-cli4\\node_modules\\_css-loader@3.4.2@css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              /* config.module.rule('sass').oneOf('normal').use('postcss-loader') */
              {
                loader: 'E:\\Spidd\\学习\\vue-cli4\\node_modules\\_postcss-loader@3.0.0@postcss-loader\\src\\index.js',
                options: {
                  sourceMap: false,
                  plugins: []
                }
              },
              /* config.module.rule('sass').oneOf('normal').use('sass-loader') */
              {
                loader: 'E:\\Spidd\\学习\\vue-cli4\\node_modules\\_sass-loader@8.0.2@sass-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  sassOptions: {
                    indentedSyntax: true
                  }
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('less') */
      {
        test: /\.less$/,
        oneOf: [
          /* config.module.rule('less').oneOf('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              /* config.module.rule('less').oneOf('vue-modules').use('vue-style-loader') */
              {
                loader: 'E:\\Spidd\\学习\\vue-cli4\\node_modules\\_vue-style-loader@4.1.2@vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              /* config.module.rule('less').oneOf('vue-modules').use('css-loader') */
              {
                loader: 'E:\\Spidd\\学习\\vue-cli4\\node_modules\\_css-loader@3.4.2@css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              /* config.module.rule('less').oneOf('vue-modules').use('postcss-loader') */
              {
                loader: 'E:\\Spidd\\学习\\vue-cli4\\node_modules\\_postcss-loader@3.0.0@postcss-loader\\src\\index.js',
                options: {
                  sourceMap: false,
                  plugins: []
                }
              },
              /* config.module.rule('less').oneOf('vue-modules').use('less-loader') */
              {
                loader: 'less-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          /* config.module.rule('less').oneOf('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              /* config.module.rule('less').oneOf('vue').use('vue-style-loader') */
              {
                loader: 'E:\\Spidd\\学习\\vue-cli4\\node_modules\\_vue-style-loader@4.1.2@vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              /* config.module.rule('less').oneOf('vue').use('css-loader') */
              {
                loader: 'E:\\Spidd\\学习\\vue-cli4\\node_modules\\_css-loader@3.4.2@css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              /* config.module.rule('less').oneOf('vue').use('postcss-loader') */
              {
                loader: 'E:\\Spidd\\学习\\vue-cli4\\node_modules\\_postcss-loader@3.0.0@postcss-loader\\src\\index.js',
                options: {
                  sourceMap: false,
                  plugins: []
                }
              },
              /* config.module.rule('less').oneOf('vue').use('less-loader') */
              {
                loader: 'less-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          /* config.module.rule('less').oneOf('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              /* config.module.rule('less').oneOf('normal-modules').use('vue-style-loader') */
              {
                loader: 'E:\\Spidd\\学习\\vue-cli4\\node_modules\\_vue-style-loader@4.1.2@vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              /* config.module.rule('less').oneOf('normal-modules').use('css-loader') */
              {
                loader: 'E:\\Spidd\\学习\\vue-cli4\\node_modules\\_css-loader@3.4.2@css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              /* config.module.rule('less').oneOf('normal-modules').use('postcss-loader') */
              {
                loader: 'E:\\Spidd\\学习\\vue-cli4\\node_modules\\_postcss-loader@3.0.0@postcss-loader\\src\\index.js',
                options: {
                  sourceMap: false,
                  plugins: []
                }
              },
              /* config.module.rule('less').oneOf('normal-modules').use('less-loader') */
              {
                loader: 'less-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          /* config.module.rule('less').oneOf('normal') */
          {
            use: [
              /* config.module.rule('less').oneOf('normal').use('vue-style-loader') */
              {
                loader: 'E:\\Spidd\\学习\\vue-cli4\\node_modules\\_vue-style-loader@4.1.2@vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              /* config.module.rule('less').oneOf('normal').use('css-loader') */
              {
                loader: 'E:\\Spidd\\学习\\vue-cli4\\node_modules\\_css-loader@3.4.2@css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              /* config.module.rule('less').oneOf('normal').use('postcss-loader') */
              {
                loader: 'E:\\Spidd\\学习\\vue-cli4\\node_modules\\_postcss-loader@3.0.0@postcss-loader\\src\\index.js',
                options: {
                  sourceMap: false,
                  plugins: []
                }
              },
              /* config.module.rule('less').oneOf('normal').use('less-loader') */
              {
                loader: 'less-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('stylus') */
      {
        test: /\.styl(us)?$/,
        oneOf: [
          /* config.module.rule('stylus').oneOf('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              /* config.module.rule('stylus').oneOf('vue-modules').use('vue-style-loader') */
              {
                loader: 'E:\\Spidd\\学习\\vue-cli4\\node_modules\\_vue-style-loader@4.1.2@vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              /* config.module.rule('stylus').oneOf('vue-modules').use('css-loader') */
              {
                loader: 'E:\\Spidd\\学习\\vue-cli4\\node_modules\\_css-loader@3.4.2@css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              /* config.module.rule('stylus').oneOf('vue-modules').use('postcss-loader') */
              {
                loader: 'E:\\Spidd\\学习\\vue-cli4\\node_modules\\_postcss-loader@3.0.0@postcss-loader\\src\\index.js',
                options: {
                  sourceMap: false,
                  plugins: []
                }
              },
              /* config.module.rule('stylus').oneOf('vue-modules').use('stylus-loader') */
              {
                loader: 'stylus-loader',
                options: {
                  sourceMap: false,
                  preferPathResolver: 'webpack'
                }
              }
            ]
          },
          /* config.module.rule('stylus').oneOf('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              /* config.module.rule('stylus').oneOf('vue').use('vue-style-loader') */
              {
                loader: 'E:\\Spidd\\学习\\vue-cli4\\node_modules\\_vue-style-loader@4.1.2@vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              /* config.module.rule('stylus').oneOf('vue').use('css-loader') */
              {
                loader: 'E:\\Spidd\\学习\\vue-cli4\\node_modules\\_css-loader@3.4.2@css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              /* config.module.rule('stylus').oneOf('vue').use('postcss-loader') */
              {
                loader: 'E:\\Spidd\\学习\\vue-cli4\\node_modules\\_postcss-loader@3.0.0@postcss-loader\\src\\index.js',
                options: {
                  sourceMap: false,
                  plugins: []
                }
              },
              /* config.module.rule('stylus').oneOf('vue').use('stylus-loader') */
              {
                loader: 'stylus-loader',
                options: {
                  sourceMap: false,
                  preferPathResolver: 'webpack'
                }
              }
            ]
          },
          /* config.module.rule('stylus').oneOf('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              /* config.module.rule('stylus').oneOf('normal-modules').use('vue-style-loader') */
              {
                loader: 'E:\\Spidd\\学习\\vue-cli4\\node_modules\\_vue-style-loader@4.1.2@vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              /* config.module.rule('stylus').oneOf('normal-modules').use('css-loader') */
              {
                loader: 'E:\\Spidd\\学习\\vue-cli4\\node_modules\\_css-loader@3.4.2@css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              /* config.module.rule('stylus').oneOf('normal-modules').use('postcss-loader') */
              {
                loader: 'E:\\Spidd\\学习\\vue-cli4\\node_modules\\_postcss-loader@3.0.0@postcss-loader\\src\\index.js',
                options: {
                  sourceMap: false,
                  plugins: []
                }
              },
              /* config.module.rule('stylus').oneOf('normal-modules').use('stylus-loader') */
              {
                loader: 'stylus-loader',
                options: {
                  sourceMap: false,
                  preferPathResolver: 'webpack'
                }
              }
            ]
          },
          /* config.module.rule('stylus').oneOf('normal') */
          {
            use: [
              /* config.module.rule('stylus').oneOf('normal').use('vue-style-loader') */
              {
                loader: 'E:\\Spidd\\学习\\vue-cli4\\node_modules\\_vue-style-loader@4.1.2@vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              /* config.module.rule('stylus').oneOf('normal').use('css-loader') */
              {
                loader: 'E:\\Spidd\\学习\\vue-cli4\\node_modules\\_css-loader@3.4.2@css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              /* config.module.rule('stylus').oneOf('normal').use('postcss-loader') */
              {
                loader: 'E:\\Spidd\\学习\\vue-cli4\\node_modules\\_postcss-loader@3.0.0@postcss-loader\\src\\index.js',
                options: {
                  sourceMap: false,
                  plugins: []
                }
              },
              /* config.module.rule('stylus').oneOf('normal').use('stylus-loader') */
              {
                loader: 'stylus-loader',
                options: {
                  sourceMap: false,
                  preferPathResolver: 'webpack'
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('js') */
      {
        test: /\.m?jsx?$/,
        exclude: [
          function () { /* omitted long function */
          }
        ],
        use: [
          /* config.module.rule('js').use('cache-loader') */
          {
            loader: 'E:\\Spidd\\学习\\vue-cli4\\node_modules\\_cache-loader@4.1.0@cache-loader\\dist\\cjs.js',
            options: {
              cacheDirectory: 'E:\\Spidd\\学习\\vue-cli4\\node_modules\\.cache\\babel-loader',
              cacheIdentifier: '984865fa'
            }
          },
          /* config.module.rule('js').use('babel-loader') */
          {
            loader: 'E:\\Spidd\\学习\\vue-cli4\\node_modules\\_babel-loader@8.0.6@babel-loader\\lib\\index.js'
          }
        ]
      },
      /* config.module.rule('eslint') */
      {
        enforce: 'pre',
        test: /\.(vue|(j|t)sx?)$/,
        exclude: [
          /node_modules/,
          'E:\\Spidd\\学习\\vue-cli4\\node_modules\\_@vue_cli-service@4.2.3@@vue\\cli-service\\lib'
        ],
        use: [
          /* config.module.rule('eslint').use('eslint-loader') */
          {
            loader: 'E:\\Spidd\\学习\\vue-cli4\\node_modules\\_eslint-loader@2.2.1@eslint-loader\\index.js',
            options: {
              extensions: [
                '.js',
                '.jsx',
                '.vue'
              ],
              cache: true,
              cacheIdentifier: 'e9acdd5e',
              emitWarning: true,
              emitError: false,
              eslintPath: 'E:\\Spidd\\学习\\vue-cli4\\node_modules\\_eslint@6.8.0@eslint',
              formatter: undefined
            }
          }
        ]
      }
    ]
  }
,
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendors: {
          name: 'chunk-vendors',
              test
        :
          /[\\\/]node_modules[\\\/]/,
              priority
        :
          -10,
              chunks
        :
          'initial'
        }
      ,
        common: {
          name: 'chunk-common',
              minChunks
        :
          2,
              priority
        :
          -20,
              chunks
        :
          'initial',
              reuseExistingChunk
        :
          true
        }
      }
    }
  ,
    minimizer: [
      /* config.optimization.minimizer('terser') */
      new TerserPlugin(
          {
            terserOptions: {
              compress: {
                arrows: false,
                collapse_vars: false,
                comparisons: false,
                computed_props: false,
                hoist_funs: false,
                hoist_props: false,
                hoist_vars: false,
                inline: false,
                loops: false,
                negate_iife: false,
                properties: false,
                reduce_funcs: false,
                reduce_vars: false,
                switches: false,
                toplevel: false,
                typeofs: false,
                booleans: true,
                if_return: true,
                sequences: true,
                unused: true,
                conditionals: true,
                dead_code: true,
                evaluate: true
              },
              mangle: {
                safari10: true
              }
            },
            sourceMap: true,
            cache: true,
            parallel: true,
            extractComments: false
          }
      )
    ]
  }
,
  plugins: [
    /* config.plugin('vue-loader') */
    new VueLoaderPlugin(),
    /* config.plugin('define') */
    new DefinePlugin(
        {
          'process.env': {
            NODE_ENV: '"development"',
            BASE_URL: '""'
          }
        }
    ),
    /* config.plugin('case-sensitive-paths') */
    new CaseSensitivePathsPlugin(),
    /* config.plugin('friendly-errors') */
    new FriendlyErrorsWebpackPlugin(
        {
          additionalTransformers: [
            function () { /* omitted long function */
            }
          ],
          additionalFormatters: [
            function () { /* omitted long function */
            }
          ]
        }
    ),
    /* config.plugin('html-src1') */
    new HtmlWebpackPlugin(
        {
          title: 'vue-cli4',
          templateParameters: function () { /* omitted long function */
          },
          chunks: [
            'src1'
          ],
          template: 'public/index.html',
          filename: 'index.html'
        }
    ),
    /* config.plugin('html-src2') */
    new HtmlWebpackPlugin(
        {
          title: 'src1',
          templateParameters: function () { /* omitted long function */
          },
          chunks: [
            'src2'
          ],
          template: 'public/index1.html',
          filename: 'index1.html'
        }
    ),
    /* config.plugin('preload-src1') */
    new PreloadPlugin(
        {
          rel: 'preload',
          includeHtmlNames: [
            'index.html'
          ],
          include: {
            type: 'initial',
            entries: [
              'src1'
            ]
          },
          fileBlacklist: [
            /\.map$/,
            /hot-update\.js$/
          ]
        }
    ),
    /* config.plugin('prefetch-src1') */
    new PreloadPlugin(
        {
          rel: 'prefetch',
          includeHtmlNames: [
            'index.html'
          ],
          include: {
            type: 'asyncChunks',
            entries: [
              'src1'
            ]
          }
        }
    ),
    /* config.plugin('preload-src2') */
    new PreloadPlugin(
        {
          rel: 'preload',
          includeHtmlNames: [
            'index1.html'
          ],
          include: {
            type: 'initial',
            entries: [
              'src2'
            ]
          },
          fileBlacklist: [
            /\.map$/,
            /hot-update\.js$/
          ]
        }
    ),
    /* config.plugin('prefetch-src2') */
    new PreloadPlugin(
        {
          rel: 'prefetch',
          includeHtmlNames: [
            'index1.html'
          ],
          include: {
            type: 'asyncChunks',
            entries: [
              'src2'
            ]
          }
        }
    ),
    /* config.plugin('copy') */
    new CopyPlugin( // 复制目录
        [
          {
            from: 'E:\\Spidd\\学习\\vue-cli4\\public',
            to: 'E:\\Spidd\\学习\\vue-cli4\\dist',
            toType: 'dir',
            ignore: [
              '.DS_Store',
              {
                glob: 'index.html',
                matchBase: false
              },
              {
                glob: 'index1.html',
                matchBase: false
              }
            ]
          }
        ]
    )
  ],
      entry
:
  {
    src1: [
      'E:\\Spidd\\学习\\vue-cli4\\src\\main.js'
    ],
        src2
  :
    [
      'E:\\Spidd\\学习\\vue-cli4\\src1\\main.js'
    ]
  }
}
