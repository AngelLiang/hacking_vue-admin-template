# hacking vue-admin-template v1.0.0

version: 1.0.0

vue-element-admin文档：https://panjiachen.github.io/vue-element-admin-site/zh/

## 目录结构

```
├── build                      // 构建相关
├── config                     // 配置相关
├── src                        // 源代码
│   ├── api                    // 所有请求
│   ├── assets                 // 主题和字体等静态资源
│   ├── components             // 全局公用组件
│   ├── directive              // 全局指令
│   ├── filters                // 全局filter
│   ├── icons                  // 项目所有svg icons
│   ├── lang                   // 国际化language
│   ├── mock                   // 项目mock模拟数据
│   ├── router                 // 路由
│   ├── store                  // 全局store管理
│   ├── styles                 // 全局样式
│   ├── utils                  // 全局公用方法
│   ├── vendor                 // 公用vendor
│   ├── views                  // views所有页面
│   ├── App.vue                // 入口页面
│   ├── main.js                // 入口文件，加载组件初始化等
│   └── permission.js          // 权限管理
├── static                     // 第三方不打包资源
│   └── Tinymce                // 富文本
├── .babelrc                   // babel-loader配置
├── .eslintrc.js               // eslint 配置项
├── .gitignore                 // git 忽略项
├── .travis.yml                // 自动化CI配置
├── favicon.ico                // favicon图标
├── index.html                 // html模板
└── package.json               // package.json
```

## 主要模块

- `config`：配置文件，分为`dev`开发环境和`prod`生产环境的配置；里面的`BASE_API`即是服务器的API URL；
- `src/api`：api文件，编写与服务器对接的接口，在这里写对服务器的请求；
- `src/router`：路由；
- `src/store`：全局存储管理，主要是把用户信息，token和权限存储cookie；
- `src/utils/fetch.js`：有request和response拦截器，二次开发时需要修改；
- `src/views`：views，在这里开发页面。

src 目录里面就是我们主要的前端开发文件，由于脚手架采用了 vue-loader，就可以把组件抽象成一个 .vue 文件，并把所需的样式和 DOM 结构都放在一起。

