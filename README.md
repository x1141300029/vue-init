# vue项目初始化

> 区分三个环境(生产环境+准生产环境+测试环境)及初始化项目配置

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# 打包生产环境
npm run build:prod

# 打包准生产环境
npm run build:uat

# 打包测试环境
npm run build:test
```



##### 环境支持
```
项目初始化优化：
    1. 区分三个环境 
        (1) 生产环境 npm run build:prod
        (2) 准生产环境 npm run build:uat
        (3) 测试环境 npm run build:test
        注：如果只有两台服务器(生产环境和测试环境)请忽略关于所有测试环境配置(非生产前环境)，保留所有uat环境，所有test环境配置可删，也可保留
    2. 状态及本地存储统一管理
    3. 请求封装
        (1) 可单函数引用，可全局引用(main.js中请将挂载的$api放开即可)
            全局引用方式如下：
                this.$api.errorLog({}).then().catch()
    4. 支持sass语法
    5. 路由拦截
```
#### 初始化项目后修改内容

1.  cdn服务器配置

   1. 只有两台服务器(生产环境+测试环境)

      将 `/config/index.js` 文件中`assetsPublicPath` 修改为相应的环境的cdn地址

      注：请忽略 `test` 环境的配置

   2. 有三台服务器(生产环境+准生产环境+测试环境)

      将 `/config/index.js` 文件中 `assetsPublicPath` 修改为相应的环境的cdn地址

2. 无cdn服务器配置

   ​	`/config/index.js` 文件中`assetsPublicPath` 全部修改为 `./` 即可

3. 三台服务器请求地址配置(生产环境+准生产环境+测试环境)

   `/config/index.js` 文件中 `ipconfig` 按照三个环境地址进行修改

4. 两台服务器请求地址配置(生产环境+准生产环境)

   `/config/index.js` 文件中 `ipconfig` 按照两个环境地址进行修改

   注：请忽略`test` 环境配置