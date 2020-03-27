# 1706B

## 学习内容
### 每日笔记
- 项目中遇到的问题
- 面试题里遇到的问题
- 归纳总结的知识点
### 项目代码
- 实训做过的项目
### 源码阅读
- jQuery
- Zepto
- lodash
- axios
- Vue
- Vuex
- React
- React-router-dom
- Element-ui
- Antd
- 从网上源码阅读系列文章入手，摘要出源码中一部分核心逻辑
### 文章阅读
- 每日掘金
- CSDN
### 算法练习
- 腾讯
- 字节跳动
- 算法面试题汇总
- 链表
- 二分搜索树
- 递归


### 认识React

#### 常见库
- react
react的核心，虚拟dom，jsx，hooks
- react-dom
关于dom的一些操作，render，findDomNode，unMountComponentAtNode
- react-native
关于native的一些操作
- react-script
封装的关于react的webpack构建脚本，可以用eject导出

#### React基础
##### 创建组件的方式
- 函数式组件(视图组件)，就是普通函数
- 类组件(容器组件)，继承React.Component或React.PureComponent
- Hooks组件(容器组件)，就是普通函数+hooks，方便复用带状态的组件
- JSX

#### 样式绑定
- 用className代替class
- 局部样式，cssModule

#### 生命周期
##### 创建期
- constructor
- componentWillMount
- render
- componentDidMount

##### 更新期
- componentWillReceiveProps(如果props更新)
- shouldComponentUpdate
- componentWillUpdate
- render
- componentDidUpdate

##### 销毁期
- componentWillUnmount

##### 两个新的生命周期
- getSnapshotBeforeUpdate
- getDerivedStateFromProps

#### 事件绑定
- 合成事件
- 事件绑定的this
    - 比较优化的事件绑定方式
        - 在constructor里bind
        - 对象字面量函数
    - 下面两种方式会导致不必要的重新渲染
        - 在render里bind
        - 箭头函数

## 跨域
### 跨域本质
- 同源策略的限制
- 请求正常的发出和返回，受到了浏览器的限制

### 解决跨域
- Proxy 
前端上线是构建静态资源，使用专业web服务器（nginx，apache，tomcat等）而不是webpack起服务，所有Proxy只能用于开发环境使用，线上使用不了，线上一定要使用代理的话交给服务端去处理。
- CORS(cross origin resource sharing)
  几个关键的头部字段
    - Access-Control-Allow-Origin: *
    - Access-Control-Allow-Headers: 'x-nideshop-token'
    - Access-Control-Allow-Methods: 'GET,POST,HEADERS,OPTIONS,PUT,DELERE'
- JSONP 
    - 原理：通过请求js，返回函数调用的方式绕过同源策略
    - 限制：只能用于get请求，访问一些安全性要求不高的资源
```js
var src = 'https://www.baidu.com/sugrec?pre=1&p=3&ie=utf-8&json=1&prod=pc&from=pc_web&wd=jsonp&req=2&bs=json&pbs=jsonp&csor=5&pwd=jso&cb=jQuery110203466153306303521_1585281282549&_=1585281282560';
var script = document.createElement('script');
script.src = src;
window.jQuery110203466153306303521_1585281282549 = function(res){
    console.log('res...', res);
}
```