module.exports = {
  publicPath: './',
  outputDir: 'dist',
  assetsDir: 'static',
  lintOnSave: false,
  runtimeCompiler: false,
  configureWebpack: {
    devtool: '#eval-source-map',
  },
  devServer: {
    open: process.platform === 'darwin',
    host: '0.0.0.0',
    port: 8080,
    https: false,
    hotOnly: false,
    proxy: {
      '/api': {
        target: 'http://125.74.7.84:8888', //目标地址
        ws: true, //// 是否启用websockets
        changeOrigin: true, //开启代理：在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
        pathRewrite: { '^/api': '/' }, //这里重写路径
      },
    }, // string | Object
    before: (app) => {},
  },
  css: {
    // extract: false, // 是否使用css分离插件 ExtractTextPlugin
    // sourceMap: false, // 开启 CSS source maps?
    // // sourceMap: config.build.productionSourceMa
    // loaderOptions: {},
    // requireModuleExtension:false,
  },

  pluginOptions: {},
  //change web title
  chainWebpack: (config) => {
    config.plugin('html').tap((args) => {
      args[0].title = '';
      return args;
    });
  },
  // 移除 prefetch 插件
  // config.plugins.delete('prefetch')

  // 或者
  // 修改它的选项：
  // config.plugin('prefetch').tap(options => {
  //     options[0].fileBlacklist = options[0].fileBlacklist || []
  //     options[0].fileBlacklist.push(/myasyncRoute(.)+?\.js$/)
  //     return options
  // })
  // }
  // outputDir:'dist',
  // assetsDir:'static'
};
