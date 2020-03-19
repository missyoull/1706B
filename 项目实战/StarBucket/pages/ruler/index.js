//index.js
//获取应用实例
const app = getApp()

Page({
  data: {

  },
  onLoad(options){
    console.log('options...', options);
    this.id = options.id;
  },
  onShow(){
    console.log('id...', this.id);
  }
})
