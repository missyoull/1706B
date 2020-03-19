多点超市

## 功能点
- [x] 路由
    - [x] 包 react-router-dom
    - [x] 配置路由表
    - [x] 封装路由

- [x] 首页
    - [x] Mock数据
    - [x] 封装Request
    - [x] 发起网络请求 ComponentDidMount
    - [x] 把数据存储到Redux
    - [x] 从Redux中取到数据 connect()
    - [x] 列表渲染 map

- [x] 底部组件
    - [x] 组件封装
    - [x] 从Redux中拿到购物车数量
    - [x] 计算总量 rudece((total, item)=>total+=item.num, 0)

- [x] 购物车
    - [x] 购物车渲染 map
    - [x] 单选功能 1.传id 2.findIndex 3.取反
    - [x] 全选功能 1.checkbox的checked 2.forEach 3.重置所有的checked
    - [x] 全选状态 every(item=>item.checked)
    - [x] 加加减减 1.传id+type 2.findIndex 3.++/--
    - [x] 总数量 reduce((total, item)=>total+=item.num, 0)
    - [x] 总价格 reduce((total, item)=>total+=item.num*item.price, 0)

- [x] Redux
    - [x] 两个包 redux react-redux
    - [x] Provider 注入store
    - [x] connect() 往组件里注入props
    - [x] 创建store createStore(reducer, initialState)
    - [x] Reducer (state, action)=>{}
    - [x] Reducer 1.深拷贝JSON.parse|JSON.string 2.SWITCH/CASE | IF/ELSE 3. return state
```js
地球村有十户人家，一到十户每户人口数量为一到十，每户人家每年收入为一到十（百万），求整村人口和整村收入
[{
    num: 1,
    income: 1
},{
    num: 2,
    income: 2
},{
    num: 3,
    income: 3
},{
    num: 4,
    income: 4
},{
    num: 5,
    income: 5
},{
    num: 6,
    income: 6
},{
    num: 7,
    income: 7
},{
    num: 8,
    income: 8
},{
    num: 9,
    income: 9
},{
    num: 10,
    income: 10
}]
```