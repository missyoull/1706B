//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    bannerList: [ // tab切换列表
      "/assets/banner1.jpg",
      "/assets/banner2.jpg",
      "/assets/banner3.jpg",
      "/assets/banner1.jpg",
      "/assets/banner2.jpg",
      "/assets/banner3.jpg"
    ],
    current: 0, // 当前选中tab项
    totalNum: 0,  // 总数量
    totalPrice: 0,  // 总价格
    goodsList: [{ //商品列表
      id: 1,
      title: '星礼卡',
      num: 0,
      price: 200
    },{
      id: 2,
      title: '星礼卡',
      num: 0,
      price: 100
    },{
      id: 3,
      title: '太妃榛果风味拿铁',
      num: 0,
      price: 40
    },{
      id: 4,
      title: '瑞雪黑森林摩卡',
      num: 0,
      price: 40
    },{
      id: 5,
      title: '圣诞姜饼风味拿铁',
      num: 0,
      price: 40
    },{
      id: 6,
      title: '焦糖玛奇朵',
      num: 0,
      price: 36
    },{
      id: 7,
      title: '星礼卡',
      num: 0,
      price: 999
    }]
  },
  onLoad(options){
    console.log('options...', options);
    this.id = options.id;
  },
  onShow(){
    console.log('id...', this.id);
  },
  // 跳转条款
  goRuler(){
    wx.navigateTo({ url: '/pages/ruler/index' });
  },
  // tab切换
  click(e){
    this.setData({
      current: e.target.dataset.id
    })
  },
  // 数量++
  add(e){
    let {goodsList} = this.data
    let index = goodsList.findIndex(item=>item.id==e.target.dataset.id);
    goodsList[index].num++;
    this.setData({
      goodsList,
      totalNum: this.getTotalNum(),
      totalPrice: this.getTotalPrice()
    })
  },
  // 数量--
  sub(e){
    let {goodsList} = this.data
    let index = goodsList.findIndex(item=>item.id==e.target.dataset.id);
    goodsList[index].num--;
    this.setData({
      goodsList,
      totalNum: this.getTotalNum(),
      totalPrice: this.getTotalPrice()
    })
  },
  // 计算总数量
  getTotalNum(){
    let {goodsList} = this.data
    return goodsList.reduce((total, item)=>total += item.num, 0);
  },
  // 计算总价钱
  getTotalPrice(){
    let {goodsList} = this.data
    return goodsList.reduce((total, item)=>total += item.num*item.price, 0);
  }
})
