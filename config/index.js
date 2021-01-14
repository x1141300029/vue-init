'use strict'
// Template version: 1.3.1
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require('path')
let assetsPublicPath='';
let ipconfig = ''
if(process.env.NODE_ENV==="production"){
  /* 生产环境  */
  ipconfig="https://warmup-api.riselinkedu.com";
  assetsPublicPath="https://cdn-warmup.riselinkedu.com/";
}else if(process.env.NODE_ENV==="uat"){
  /* 准生产环境 */
  ipconfig='https://warmup-test.api.riselinkedu.com';
  assetsPublicPath="https://cdn-warmup.riselinkedu.com/test/";
}else if(process.env.NODE_ENV==="test"){
  /* 测试环境 */
  ipconfig="https://test.kemilong.com";
  assetsPublicPath="https://test.kemilong.com/rise_class/";
}else {
  /* 开发环境 */
  ipconfig="/api";
  assetsPublicPath="./";
}
module.exports = {
  assetsPublicPath,
  ipconfig,
  dev: {
    // Paths
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {
      "/api": {
        target: "http://ehuacha.qicp.vip", // 要请求的后台地址
        changeOrigin: true, // 是否跨域
        pathRewrite: {
          "^/api": "/" // 这里理解成用‘/api’代替target里面的地址，后面组件中我们掉接口时直接用api代替
        }
      },
    },

    // Various Dev Server settings
    host: 'localhost', // can be overwritten by process.env.HOST
    port: 8080, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
    autoOpenBrowser: false,
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-

    
    /**
     * Source Maps
     */

    // https://webpack.js.org/configuration/devtool/#development
    devtool: 'cheap-module-eval-source-map',

    // If you have problems debugging vue-files in devtools,
    // set this to false - it *may* help
    // https://vue-loader.vuejs.org/en/options.html#cachebusting
    cacheBusting: true,

    cssSourceMap: true
  },

  build: {
    // Template for index.html
    index: path.resolve(__dirname, '../dist/index.html'),

    // Paths
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: assetsPublicPath,

    /**
     * Source Maps
     */

    productionSourceMap: process.env.NODE_ENV!=='production',
    // https://webpack.js.org/configuration/devtool/#production
    devtool: '#source-map',

    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: true,
    productionGzipExtensions: ['js', 'css'],

    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  }
}
