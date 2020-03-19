// 引入Mock的数据
import GovList from './mock/gov'

export default {
  // 增删改查 => POST、DELETE、PUT、GET、OPTIONS、HEAD

  // 机构列表
  'GET /api/main/govList': (req, res)=>{
    console.log('req...', req);
    res.send(GovList)
  },

  // 新增机构
  'POST /api/main/addGov': (req, res)=>{
    // console.log('req...', GovList);
    GovList.list.push({
      id: GovList.list.length+1,
      ...req.body
    });
    res.send({
      code: 1,
      msg: '添加机构成功'
    })
  },

  // 删除机构
  'DELETE /api/main/deleteGov': (req, res)=>{
    let index = GovList.list.findIndex(item=>item.id===req.body.id);
    GovList.list.splice(index, 1);
    res.send({
      code: 1,
      msg: '删除机构成功'
    })
  }
};
