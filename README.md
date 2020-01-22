<!--
 * @Author: JieLinghu
 * @Date: 2020-01-16 14:46:18
 * @LastEditors  : JieLinghu
 * @LastEditTime : 2020-01-19 15:51:39
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
        ------- api        接口
        |        |
        |        ----------- home.js                        首页接口
        |        ----------- news.js                        新闻类接口
        |        ----------- user.js                        用户接口
        ---- assets         静态文件目录
        |        |
        |       css         样式表
        |        |
        |        |----------common.scss                     公共样式

        |       iconfont    图标文字目录
        |       img         静态图片

        ---- components     组件模块
        |        |
        |        |----------- home                           首页组装
        |        |----------- industryNews                   行业新闻组装
        |        |----------- miningNews                     矿业新闻组装
        |        |----------- specialTopic                   行业政策组装
        |        |----------- industryCharacter              行业人物组装
        |        |----------- blockChainApplication          区块链应用组装
        |        |----------- college                        学院组装
        |        |----------- searchResult                   搜索结果页组装
        公共组件
        |        |----------- Header.vue                     页头组件
        |        |----------- Footer.vue                     页脚组件
        |        |----------- HotLabel.vue                   热门标签组件
        |        |----------- NewFlashItem.vue               快讯组件
        |        |----------- Tops.vue                       TOPs组件
        |        |----------- TutorialEvaluation.vue         教程/测试组件
        
        ---- router         Vue-router配置
        |        |
        ---- store          Vuex配置
        |        |
        ---- utils          工具js文件
        |        |
        |        |----------- request.js                      ajax拦截器

        ---- views          页面布局
        |        |
        |        |----------- Login.vue                       登录注册页面布局
        |        |----------- Default.vue                     默认布局
        