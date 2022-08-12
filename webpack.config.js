const miniCssExtractPlugin = require("mini-css-extract-plugin");//引入css和js分开打包的插件
const optimize = require("optimize-css-assets-webpack-plugin");// 引入css压缩插件
const htmlPlugin = require("html-webpack-plugin"); // 打包html的插件
const { CleanWebpackPlugin } = require("clean-webpack-plugin") // 引入打包前清除dist目录的插件
module.exports={ // commonjs规范导出模块
  entry: { // 如果是对象写法可以配置多个入口文件。
    main: ["./src/bootstrap-5.1.3-dist/js/bootstrap.bundle.js","./src/js/index.js"],
  }, // 设置入口文件
  output: {
    path: __dirname+"/dist", // __dirname当前webpack.config.js所在的目录
    filename: "[name].js", // 输出文件的名称
    assetModuleFilename:"imgs/[name].[ext]", // 配置打包图片存放在imgs , [name] 保存图片名称 [ext] 保留图片后缀名,这里只能打包css文件里面的图片
    // publicPath:"/static/",//添加静态文件的前缀
  },
  mode: "production" ,  // 打包环境设置，development 开发环境和 production 产品环境
  module:{ // 打包的loader安装
    rules: [ // 存放各种loader,主要加载各种格式的文件
      { // 一个loader就是一个对象
        test: /\.css$/,  // 属性值是一个正则表达式，表示loader的文件类型
        use: [{
          loader: miniCssExtractPlugin.loader  // 需要使用miniCssExtractPlugin的loader打包css文件，才能从js里面拆分出来。   
        },"css-loader"] // 配置使用style-loader和css-loader加载css后缀名的文件。
      },{
        test: /\.scss$/, // 加载scss文件
        use:[
          {
            loader: miniCssExtractPlugin.loader  // 需要使用miniCssExtractPlugin的loader打包css文件，才能从js里面拆分出来。   
          },
          "css-loader",  // 最终打包为css文件
          "sass-loader" // 可以加载sass文件的loader，转为css
        ]
      },{ // 这里配置的是打包js文件里面的图片
        test: /\.(jpg|png|gif|jpeg)$/,
        type: "asset/resource", // 打包文件类型为静态资源类型
        generator: {
          filename: "imgs/[name].[ext]" // 打包后的文件名,[hash:8]生成一个8位的随机数，防止浏览器使用缓存图片。
        }
      }
    ]
  },
  optimization: { // 配置css压缩插件
    minimizer:[new optimize()]
  },
  plugins: [ // 插件
    new CleanWebpackPlugin(),
    new miniCssExtractPlugin({ // 初始化插件，并配置插件
      filename: '[name].css'  // 设置打包后的css文件名
    }),
    new htmlPlugin({ // 配置打包html文件
      template: "./src/index.html", // 配置打包的html文件
      filename: "index.html", // 输出打包后的html文件
      chunks: ["main"], // 配置html引入的js文件
      inject: "body", // 设置脚本注入的位置在body里面
      minify: {
        removeComments: true, // 去掉html的注释
        collapseWhitespace: true, // 去掉html的空格，压缩html代码
      }
    }),
    new htmlPlugin({ // 配置打包html文件
      template: "./src/aarticleJS.html", // 配置打包的html文件
      filename: "aarticleJS.html", // 输出打包后的html文件
      chunks: ["main"], // 配置html引入的js文件
      inject: "body", // 设置脚本注入的位置在body里面
      minify: {
        removeComments: true, // 去掉html的注释
        collapseWhitespace: true, // 去掉html的空格，压缩html代码
      }
    })
    ,
    new htmlPlugin({ // 配置打包html文件
      template: "./src/about.html", // 配置打包的html文件
      filename: "about.html", // 输出打包后的html文件
      chunks:  ["main"], // 配置html引入的js文件
      inject: "body", // 设置脚本注入的位置在body里面
      minify: {
        removeComments: true, // 去掉html的注释
        collapseWhitespace: true, // 去掉html的空格，压缩html代码
      }
    })
    ,
    new htmlPlugin({ // 配置打包html文件
      template: "./src/algorithm.html", // 配置打包的html文件
      filename: "algorithm.html", // 输出打包后的html文件
      chunks:  ["main"], // 配置html引入的js文件
      inject: "body", // 设置脚本注入的位置在body里面
      minify: {
        removeComments: true, // 去掉html的注释
        collapseWhitespace: true, // 去掉html的空格，压缩html代码
      }
    })
    ,
    new htmlPlugin({ // 配置打包html文件
      template: "./src/article.html", // 配置打包的html文件
      filename: "article.html", // 输出打包后的html文件
      chunks:  ["main"], // 配置html引入的js文件
      inject: "body", // 设置脚本注入的位置在body里面
      minify: {
        removeComments: true, // 去掉html的注释
        collapseWhitespace: true, // 去掉html的空格，压缩html代码
      }
    })
    ,
    new htmlPlugin({ // 配置打包html文件
      template: "./src/article2.html", // 配置打包的html文件
      filename: "article2.html", // 输出打包后的html文件
      chunks:  ["main"], // 配置html引入的js文件
      inject: "body", // 设置脚本注入的位置在body里面
      minify: {
        removeComments: true, // 去掉html的注释
        collapseWhitespace: true, // 去掉html的空格，压缩html代码
      }
    })
    ,
    new htmlPlugin({ // 配置打包html文件
      template: "./src/articleCSS.html", // 配置打包的html文件
      filename: "articleCSS.html", // 输出打包后的html文件
      chunks:  ["main"], // 配置html引入的js文件
      inject: "body", // 设置脚本注入的位置在body里面
      minify: {
        removeComments: true, // 去掉html的注释
        collapseWhitespace: true, // 去掉html的空格，压缩html代码
      }
    })
    ,
    new htmlPlugin({ // 配置打包html文件
      template: "./src/articleHTML.html", // 配置打包的html文件
      filename: "articleHTML.html", // 输出打包后的html文件
      chunks:  ["main"], // 配置html引入的js文件
      inject: "body", // 设置脚本注入的位置在body里面
      minify: {
        removeComments: true, // 去掉html的注释
        collapseWhitespace: true, // 去掉html的空格，压缩html代码
      }
    })
    ,
    new htmlPlugin({ // 配置打包html文件
      template: "./src/articleSEO.html", // 配置打包的html文件
      filename: "articleSEO.html", // 输出打包后的html文件
      chunks:  ["main"], // 配置html引入的js文件
      inject: "body", // 设置脚本注入的位置在body里面
      minify: {
        removeComments: true, // 去掉html的注释
        collapseWhitespace: true, // 去掉html的空格，压缩html代码
      }
    }),
    new htmlPlugin({ // 配置打包html文件
      template: "./src/bottomAdd.html", // 配置打包的html文件
      filename: "bottomAdd.html", // 输出打包后的html文件
      chunks:  ["main"], // 配置html引入的js文件
      inject: "body", // 设置脚本注入的位置在body里面
      minify: {
        removeComments: true, // 去掉html的注释
        collapseWhitespace: true, // 去掉html的空格，压缩html代码
      }
    }),
    new htmlPlugin({ // 配置打包html文件
      template: "./src/detail.html", // 配置打包的html文件
      filename: "detail.html", // 输出打包后的html文件
      chunks:  ["main"], // 配置html引入的js文件
      inject: "body", // 设置脚本注入的位置在body里面
      minify: {
        removeComments: true, // 去掉html的注释
        collapseWhitespace: true, // 去掉html的空格，压缩html代码
      }
    }),
    new htmlPlugin({ // 配置打包html文件
      template: "./src/develop.html", // 配置打包的html文件
      filename: "develop.html", // 输出打包后的html文件
      chunks:  ["main"], // 配置html引入的js文件
      inject: "body", // 设置脚本注入的位置在body里面
      minify: {
        removeComments: true, // 去掉html的注释
        collapseWhitespace: true, // 去掉html的空格，压缩html代码
      }
    }),
    new htmlPlugin({ // 配置打包html文件
      template: "./src/flex.html", // 配置打包的html文件
      filename: "flex.html", // 输出打包后的html文件
      chunks:  ["main"], // 配置html引入的js文件
      inject: "body", // 设置脚本注入的位置在body里面
      minify: {
        removeComments: true, // 去掉html的注释
        collapseWhitespace: true, // 去掉html的空格，压缩html代码
      }
    }),
    new htmlPlugin({ // 配置打包html文件
      template: "./src/form.html", // 配置打包的html文件
      filename: "form.html", // 输出打包后的html文件
      chunks:  ["main"], // 配置html引入的js文件
      inject: "body", // 设置脚本注入的位置在body里面
      minify: {
        removeComments: true, // 去掉html的注释
        collapseWhitespace: true, // 去掉html的空格，压缩html代码
      }
    }),
    new htmlPlugin({ // 配置打包html文件
      template: "./src/getFormContent.html", // 配置打包的html文件
      filename: "getFormContent.html", // 输出打包后的html文件
      chunks:  ["main"], // 配置html引入的js文件
      inject: "body", // 设置脚本注入的位置在body里面
      minify: {
        removeComments: true, // 去掉html的注释
        collapseWhitespace: true, // 去掉html的空格，压缩html代码
      }
    }),
    new htmlPlugin({ // 配置打包html文件
      template: "./src/hr.html", // 配置打包的html文件
      filename: "hr.html", // 输出打包后的html文件
      chunks:  ["main"], // 配置html引入的js文件
      inject: "body", // 设置脚本注入的位置在body里面
      minify: {
        removeComments: true, // 去掉html的注释
        collapseWhitespace: true, // 去掉html的空格，压缩html代码
      }
    }),
    new htmlPlugin({ // 配置打包html文件
      template: "./src/HTML5New.html", // 配置打包的html文件
      filename: "HTML5New.html", // 输出打包后的html文件
      chunks:  ["main"], // 配置html引入的js文件
      inject: "body", // 设置脚本注入的位置在body里面
      minify: {
        removeComments: true, // 去掉html的注释
        collapseWhitespace: true, // 去掉html的空格，压缩html代码
      }
    }),
    new htmlPlugin({ // 配置打包html文件
      template: "./src/htmlAll.html", // 配置打包的html文件
      filename: "htmlAll.html", // 输出打包后的html文件
      chunks:  ["main"], // 配置html引入的js文件
      inject: "body", // 设置脚本注入的位置在body里面
      minify: {
        removeComments: true, // 去掉html的注释
        collapseWhitespace: true, // 去掉html的空格，压缩html代码
      }
    }),
    new htmlPlugin({ // 配置打包html文件
      template: "./src/HTMLForm.html", // 配置打包的html文件
      filename: "HTMLForm.html", // 输出打包后的html文件
      chunks:  ["main"], // 配置html引入的js文件
      inject: "body", // 设置脚本注入的位置在body里面
      minify: {
        removeComments: true, // 去掉html的注释
        collapseWhitespace: true, // 去掉html的空格，压缩html代码
      }
    }),
    new htmlPlugin({ // 配置打包html文件
      template: "./src/HTMLRoad.html", // 配置打包的html文件
      filename: "HTMLRoad.html", // 输出打包后的html文件
      chunks:  ["main"], // 配置html引入的js文件
      inject: "body", // 设置脚本注入的位置在body里面
      minify: {
        removeComments: true, // 去掉html的注释
        collapseWhitespace: true, // 去掉html的空格，压缩html代码
      }
    }),
    new htmlPlugin({ // 配置打包html文件
      template: "./src/jqueryEasy.html", // 配置打包的html文件
      filename: "jqueryEasy.html", // 输出打包后的html文件
      chunks:  ["main"], // 配置html引入的js文件
      inject: "body", // 设置脚本注入的位置在body里面
      minify: {
        removeComments: true, // 去掉html的注释
        collapseWhitespace: true, // 去掉html的空格，压缩html代码
      }
    }),
    new htmlPlugin({ // 配置打包html文件
      template: "./src/jsTab.html", // 配置打包的html文件
      filename: "jsTab.html", // 输出打包后的html文件
      chunks:  ["main"], // 配置html引入的js文件
      inject: "body", // 设置脚本注入的位置在body里面
      minify: {
        removeComments: true, // 去掉html的注释
        collapseWhitespace: true, // 去掉html的空格，压缩html代码
      }
    }),
    new htmlPlugin({ // 配置打包html文件
      template: "./src/JSswiap.html", // 配置打包的html文件
      filename: "JSswiap.html", // 输出打包后的html文件
      chunks:  ["main"], // 配置html引入的js文件
      inject: "body", // 设置脚本注入的位置在body里面
      minify: {
        removeComments: true, // 去掉html的注释
        collapseWhitespace: true, // 去掉html的空格，压缩html代码
      }
    }),
    new htmlPlugin({ // 配置打包html文件
      template: "./src/label.html", // 配置打包的html文件
      filename: "label.html", // 输出打包后的html文件
      chunks:  ["main"], // 配置html引入的js文件
      inject: "body", // 设置脚本注入的位置在body里面
      minify: {
        removeComments: true, // 去掉html的注释
        collapseWhitespace: true, // 去掉html的空格，压缩html代码
      }
    }),
    new htmlPlugin({ // 配置打包html文件
      template: "./src/layout.html", // 配置打包的html文件
      filename: "layout.html", // 输出打包后的html文件
      chunks:  ["main"], // 配置html引入的js文件
      inject: "body", // 设置脚本注入的位置在body里面
      minify: {
        removeComments: true, // 去掉html的注释
        collapseWhitespace: true, // 去掉html的空格，压缩html代码
      }
    }),
    new htmlPlugin({ // 配置打包html文件
      template: "./src/list.html", // 配置打包的html文件
      filename: "list.html", // 输出打包后的html文件
      chunks:  ["main"], // 配置html引入的js文件
      inject: "body", // 设置脚本注入的位置在body里面
      minify: {
        removeComments: true, // 去掉html的注释
        collapseWhitespace: true, // 去掉html的空格，压缩html代码
      }
    }),
    new htmlPlugin({ // 配置打包html文件
      template: "./src/liuyan.html", // 配置打包的html文件
      filename: "liuyan.html", // 输出打包后的html文件
      chunks:  ["main"], // 配置html引入的js文件
      inject: "body", // 设置脚本注入的位置在body里面
      minify: {
        removeComments: true, // 去掉html的注释
        collapseWhitespace: true, // 去掉html的空格，压缩html代码
      }
    }),
    new htmlPlugin({ // 配置打包html文件
      template: "./src/nav.html", // 配置打包的html文件
      filename: "nav.html", // 输出打包后的html文件
      chunks:  ["main"], // 配置html引入的js文件
      inject: "body", // 设置脚本注入的位置在body里面
      minify: {
        removeComments: true, // 去掉html的注释
        collapseWhitespace: true, // 去掉html的空格，压缩html代码
      }
    }),
    new htmlPlugin({ // 配置打包html文件
      template: "./src/NavMenu.html", // 配置打包的html文件
      filename: "NavMenu.html", // 输出打包后的html文件
      chunks:  ["main"], // 配置html引入的js文件
      inject: "body", // 设置脚本注入的位置在body里面
      minify: {
        removeComments: true, // 去掉html的注释
        collapseWhitespace: true, // 去掉html的空格，压缩html代码
      }
    }),
    new htmlPlugin({ // 配置打包html文件
      template: "./src/networkSite.html", // 配置打包的html文件
      filename: "networkSite.html", // 输出打包后的html文件
      chunks:  ["main"], // 配置html引入的js文件
      inject: "body", // 设置脚本注入的位置在body里面
      minify: {
        removeComments: true, // 去掉html的注释
        collapseWhitespace: true, // 去掉html的空格，压缩html代码
      }
    }),
    new htmlPlugin({ // 配置打包html文件
      template: "./src/PbootCMS.html", // 配置打包的html文件
      filename: "PbootCMS.html", // 输出打包后的html文件
      chunks:  ["main"], // 配置html引入的js文件
      inject: "body", // 设置脚本注入的位置在body里面
      minify: {
        removeComments: true, // 去掉html的注释
        collapseWhitespace: true, // 去掉html的空格，压缩html代码
      }
    }),
    new htmlPlugin({ // 配置打包html文件
      template: "./src/pbootcmsList.html", // 配置打包的html文件
      filename: "pbootcmsList.html", // 输出打包后的html文件
      chunks:  ["main"], // 配置html引入的js文件
      inject: "body", // 设置脚本注入的位置在body里面
      minify: {
        removeComments: true, // 去掉html的注释
        collapseWhitespace: true, // 去掉html的空格，压缩html代码
      }
    }),
    new htmlPlugin({ // 配置打包html文件
      template: "./src/PbootCMSUse.html", // 配置打包的html文件
      filename: "PbootCMSUse.html", // 输出打包后的html文件
      chunks:  ["main"], // 配置html引入的js文件
      inject: "body", // 设置脚本注入的位置在body里面
      minify: {
        removeComments: true, // 去掉html的注释
        collapseWhitespace: true, // 去掉html的空格，压缩html代码
      }
    }),
    new htmlPlugin({ // 配置打包html文件
      template: "./src/SEOBetter.html", // 配置打包的html文件
      filename: "SEOBetter.html", // 输出打包后的html文件
      chunks:  ["main"], // 配置html引入的js文件
      inject: "body", // 设置脚本注入的位置在body里面
      minify: {
        removeComments: true, // 去掉html的注释
        collapseWhitespace: true, // 去掉html的空格，压缩html代码
      }
    }),
    new htmlPlugin({ // 配置打包html文件
      template: "./src/special.html", // 配置打包的html文件
      filename: "special.html", // 输出打包后的html文件
      chunks:  ["main"], // 配置html引入的js文件
      inject: "body", // 设置脚本注入的位置在body里面
      minify: {
        removeComments: true, // 去掉html的注释
        collapseWhitespace: true, // 去掉html的空格，压缩html代码
      }
    }),
    new htmlPlugin({ // 配置打包html文件
      template: "./src/website.html", // 配置打包的html文件
      filename: "website.html", // 输出打包后的html文件
      chunks:  ["main"], // 配置html引入的js文件
      inject: "body", // 设置脚本注入的位置在body里面
      minify: {
        removeComments: true, // 去掉html的注释
        collapseWhitespace: true, // 去掉html的空格，压缩html代码
      }
    }),
    new htmlPlugin({ // 配置打包html文件
      template: "./src/webPath.html", // 配置打包的html文件
      filename: "webPath.html", // 输出打包后的html文件
      chunks:  ["main"], // 配置html引入的js文件
      inject: "body", // 设置脚本注入的位置在body里面
      minify: {
        removeComments: true, // 去掉html的注释
        collapseWhitespace: true, // 去掉html的空格，压缩html代码
      }
    })

  ],
  devServer: { // 配置开发服务器地址
    port: 3000 //端口号
  }
}