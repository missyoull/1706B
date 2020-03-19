'use strict';

const Service = require('egg').Service;

class UserService extends Service {
    //添加
  async add(classname,objectname,number,status) {
      let sql = 'insert into listtt (classname,objectname,number,status) values (?,?,?,?)';
      let resolve = await this.app.mysql.query(sql,[classname,objectname,number,status])
    // const result = await this.app.mysql.insert('listtt', {classname,objectname,number,status }); 
    console.log(resolve)
    return resolve
  }
  //删除
  async del(id){
    const result = await this.app.mysql.delete('listtt', {id});
    return result
  }
  //更新
  async updata(id,classname,objectname,number,status){
    const result = await this.app.mysql.update('listtt', {id,classname,objectname,number,status});
    return result
  }
  //读取
  async list(){
    // const post = await this.app.mysql.get('listtt', {id,classname,objectname,number,status} );
    const result = await this.app.mysql.select('listtt',{});
    return result
  }
  //读取一个
  async one(id){
    const post = await this.app.mysql.get('listtt', { id});
    return post
  }

}

module.exports = UserService;
