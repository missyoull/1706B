# 圈子

## 产品背景
社交产品，发布圈子，圈子内的人可以互相看到，评论

## 开发架构
- 适合移动端项目联系
- 大量图片处理
- 事件代理
- 移动端动画
- 大量使用懒加载与预加载

## 线上地址
http://h5.chelun.com/2017/official/?from=web#/

## 产品原型
- https://free.modao.cc/app/845736729e43ebe010f0c387badca539a6cd434f#screen=sCCC70CB6AC1572400180849
- 密码：zhongxue


## 接口文档地址
https://www.showdoc.cc/4zuxiangmu?page_id=2069933812227551

## 启动项目
```js
1. 启动后台，监听本地3000端口
cd chat-server
cnpm i
npm run start
2. 启动前台
npm run serve
在浏览器里输入地址,http://localhost:8080
```

## 功能列表
- [x] 登陆
- [x] 注册
- [x] 圈子
   - [x] 获取圈子列表
   - [x] 发布圈子
   - [x] 发布评论
   - [x] 回复评论

## 用到的技术
- [x] vue
    - [x] 循环组件
    - [x] transtion
    - [x] transtion-group
    - [x] keep-alive
- [x] vue-router
    - [x] 导航守卫
    - [x] 路由懒加载
    - [x] nprogress
- [x] vuex
    - [x] 日志
    - [x] modules
- [x] UI库Vant