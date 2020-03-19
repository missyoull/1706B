const jwt = require('jsonwebtoken');
function verifyToken(token,secret){
    return new Promise((reslove,reject)=>{
        jwt.verify(token,secret,(err,info)=>{
            if(!err){
                console.log('info...', info);
                reslove(info);
            }else{
                reject(err);
            }
        })
    })
}
module.exports = options => {
    return async (ctx,next)=>{
        // 校验白名单
        console.log('ctx...', ctx, ctx.path);

        let Authorization = unescape(ctx.get('authorization'));
        if(!Authorization){
            ctx.status = 401;
            ctx.body = {msg:'没有权限信息',code:0}
            return;
        }
        let secret = 'wangzhangongcheng';
        let userInfo = null;
        try{
            // 老师的信息 {user_name,user_id,signTime,identity_text,identity_id}
            // 学生的信息 {student_name,student_id,signTime}
            userInfo = await verifyToken(Authorization,secret);
        }catch(err){
            ctx.status = 401;
            ctx.body = {msg:'权限信息可能被篡改',code:0} 
            return;
        }
       
        // // 验证token是否过期
        // let {signTime} = userInfo;
        // let nowTime = new Date().getTime();
        // let time = (nowTime - signTime) / 1000 / 60 / 60;
        // if(time >= 5){ // 超时2小时
        //     ctx.status = 401;
        //     ctx.body = {msg:'权限信息过期',code:0}
        //     return;
        // }
        // // 把用户信息存入ctx.token中
        // ctx.token = userInfo;
        await next();
    }
}