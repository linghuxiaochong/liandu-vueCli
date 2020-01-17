<!--
 * @Author: JieLinghu
 * @Date: 2020-01-16 14:46:18
 * @LastEditors  : JieLinghu
 * @LastEditTime : 2020-01-17 14:34:32
 * @description: 
 -->
# liandu

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


### 软件架构
#### @vue/cli 4 搭建 Vue + Vuex + Vue Router + Scss + axios

    .env.dev ------             开发环境
    .env.production ------      打包环境变量
    .package.json ------        依赖配置
    src ------                  根目录
    |
        ---- assets         静态文件目录
        |        |
        |       css         样式表
        |        |
        |       ------------common.scss         公共样式
        |       ------------variable.scss       全局样式变量
        |       iconfont    图标文字目录
        |       img         静态图片
        ---- components     组件模块
        |        |
        ---- router         Vue-router配置
        |        |
        ---- store          Vuex配置
        |        |
        ---- utils          工具js文件
        |        |
        |        request.js      ajax拦截器
        ---- views          页面布局
        |        |
        |        Login.vue      登录注册页面布局
        |        Default.vue    默认布局
        ---------|
        --------- index.html                   首页
        --------- industryNews.html 