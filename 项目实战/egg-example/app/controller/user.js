const jwt = require('jsonwebtoken');


const Controller = require('egg').Controller;

class HomeController extends Controller {
  //登陆
  async login() {
    const {username, password} = this.ctx.request.body;
    if (username == 'beijing' && password == 'welcome'){
      let token = jwt.sign({username, password}, 'wangzhangongcheng', {expiresIn: '1h'});
      this.ctx.body = {
        code: 1,
        token,
        msg: '登陆成功'
      }
    }else{
      this.ctx.body = {
        code: 0,
        msg: '登陆失败'
      }
    }
  }

  //添加
  async add() {
    const { ctx } = this;
    let {classname,objectname,number,status} = ctx.request.body
    console.log(classname,objectname,number,status);
    let user = await ctx.service.user.add(classname,objectname,number,status)
    if(user.affectedRows == 1){
      ctx.body = {
        code:1,
        msg:'成功'
      }
    }
  }

  //删除
  async del(){
    const {ctx} = this;
    let {id} = ctx.request.body
    let user = await ctx.service.user.del(id)
    if(user){
      ctx.body = {
        code:1,
        msg:'删除成功'
      }
    }
  }

  //更新
  async updata(){
    const{ctx} = this;
    let {id,classname,objectname,number,status} = ctx.request.body
    let user = await ctx.service.user.updata(id,classname,objectname,number,status)
    if(user){
      ctx.body={
        code:1,
        msg:'修改成功'
      }
    }
  }

  //读取
  async list(){
    const {ctx} = this;
    let user = await ctx.service.user.list();
    ctx.body = user
  }
  //读取一个
  async one(){
    const {ctx} = this;
    let {id} = ctx.request.query;
    let user = await ctx.service.user.one(id);
    ctx.body = user
  }
}

module.exports = HomeController;
