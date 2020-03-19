'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }

  // 登录信息
  async getUser() {
    let { ctx } = this

    let { user, password } = ctx.request.body

    let result = await this.ctx.service.home.getAllUser()
    let token = this.app.jwt.sign({ user, password }, this.app.jwt.sercet, { expiresIn: "1h" })
    result.forEach(item => {
      if (item.userName == user && item.passWord == password * 1) {
        ctx.body = {
          methods: "post",
          code: 1,
          msg: "登录成功",
          token
        }
      } else {
        ctx.body = {
          methods: "post",
          code: 1,
          msg: "登录失败",

        }
      }
    })
  }

  // 列表数据
  async getList() {
    let { ctx } = this

    let result = await this.ctx.service.home.getListData()

    ctx.body = {
      methods: "get",
      code: 1,
      msg: "列表数据",
      result
    }
  }

  // 详情和评论数据
  async getDetailorPinlun() {
    let { ctx } = this

    let result = await this.ctx.service.home.getDetailData()


    ctx.body = {
      methods: "get",
      code: 1,
      msg: "列表数据",
      result
    }
  }

  // 添加博客
  async getAddBk() {
    let { ctx } = this

    let { title, time, id, text } = ctx.query

    let result = await this.ctx.service.home.getAdd(title, time, id)
    // let resultDetail = await this.ctx.service.home.getAddDetail(title, time, id,text)
    let resultData = await this.ctx.service.home.getListData()

    ctx.body = {
      metods: "get",
      code: 1,
      msg: "添加成功",
      resultData
    }
  }
  // 注册
  async getAddRegister() {
    let { ctx } = this

    let { user, password, relname } = ctx.query

    let num = Math.floor(Math.random() * 100) + 1;

    let result = await this.ctx.service.home.getAddUser(user, password, relname, num)

    ctx.body = {
      methods: "get",
      code: 1,
      msg: "注册成功",
      result
    }
  }

  // 添加评论
  async getAddPinlun() {
    let { ctx } = this

    let num = Math.floor(Math.random() * 100) + 1;

    let { content,id } = ctx.query

    
    let result = await this.ctx.service.home.getAddPL(content,num,id)

    ctx.body = {
      methods: "get",
      code: 1,
      msg: "添加成功",
      result
    }

  }

}

module.exports = HomeController;
