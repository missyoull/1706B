const jwt = require('jsonwebtoken');
const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, user';
  }

  async show() {
    const { ctx } = this;
    // console.log('ctx...', ctx, ctx.req, ctx.params);
    ctx.body = `查看用户${ctx.params.id}` 
  }

  async create() {
    const {ctx} = this;
    const {username, password} = ctx.request.body;
    if (username == '1705B' && password == "1705B"){
      let token = jwt.sign({username, password}, "wangzhangongcheng", {expiresIn: '10000'})
      ctx.body = {
        code: 1,
        msg: '创建用户成功',
        token
      }
    }else{
      ctx.body = {
        code: -1,
        msg: '创建用户失败'
      }
    }
  }
}

module.exports = HomeController;
