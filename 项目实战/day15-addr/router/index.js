const router = require('koa-router')();

router.post('/api/add', async (ctx) => {
    let {name,phone,addr,address}=ctx.request.body;
    const sql='insert into addres (name,phone,addr,address) values (?,?,?,?)';
    let res = await ctx.mysql.query(sql, [name,phone,addr,address]);
    if(res.msg=='success'){
        ctx.body={
            code:1,
            msg:'添加成功'
        }
    }else{
        ctx.body={
            code:0,
            msg:'添加失败'
        }
    }
})

router.post('/api/edit', async (ctx) => {
    let {name,phone,addr,address,id} = ctx.request.body;
    const sql = `update addres set name=?,phone=?,addr=?,address=? where id=?`
    let res = await ctx.mysql.query(sql, [name,phone,addr,address,id]);
    if (res.msg == 'success') {
        ctx.body = {
            code: 1,
            msg: '修改成功'
        }
    } else {
        ctx.body = {
            code: 1,
            msg: '修改失败'
        }
    }
})

router.get('/api/delete', async (ctx) => {
    let {id} = ctx.query;
    let sql = 'delete from addres where id=?';
    let res = await ctx.mysql.query(sql, [id]);
    if (res.msg === 'error') {
        ctx.body = {
            code: 0,
            msg: '删除失败'
        }
    } else {
        ctx.body = {
            code: 1,
            msg: '删除成功'
        }
    }
})

router.get('/api/list', async (ctx) => {
    let data = await ctx.mysql.query('select * from addres');
    if (data.data.length) {
        ctx.body = {
            code: 1,
            data: data.data,
        }
    } else {
        ctx.body = {
            code: 0,
            msg: '暂无数据',
        }
    }
})

module.exports = router;