
let Service = require("egg").Service

class HomeService extends Service {
    async getAllUser() {
        let result = await this.app.mysql.select("uesrorpass")
        return result
    }
    async getListData() {
        let result = await this.app.mysql.select("listdata")
        return result
    }
    async getDetailData() {
        let result = await this.app.mysql.query("SELECT pinlundata.content,pinlundata.dId,pinlundata.id,pinlundata.`relname`,pinlundata.time,pinlundata.zan,listdata.id,listdata.img,listdata.`name`,listdata.time,listdata.title FROM listdata LEFT JOIN pinlundata ON listdata.id = pinlundata.dId")
        return result
    }

    async getAdd(title, time, id) {
        let result = await this.app.mysql.insert("listdata",
            { id: id, title: title, time: time, content: "12", name: "123", img: "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2616736980,3933048081&fm=26&gp=0.jpg" })
        return result
    }
    async getAddUser(user, password, relname,num) {
        // console.log(num, user, password, relname)
        let result = await this.app.mysql.insert("uesrorpass", { id: num, userName: user, passWord: password, relName: relname })
        return result
    }

    async getAddPL(content,num,id){
        let result = await this.app.mysql.insert("pinlundata",{dId:id,id:num,content,relname:"青黄",time:"2019-10-25",zan:0})
        return result
    }
}

module.exports = HomeService