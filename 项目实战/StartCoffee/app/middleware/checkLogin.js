const jwt = require('jsonwebtoken');
function verify(token){
    return new Promise((resolve, reject)=>{
        jwt.verify(token, "wangzhangongcheng", (err, val)=>{
            console.log('err...', err, val);
            if (err){
                reject();
            }else{
                resolve(val);
            }
        })
    })
}

module.exports = options => {
    return async (ctx,next)=>{
        console.log('ctx...', ctx.path, ctx.method, ctx.get('token'),  ctx.get('origin'));
        let token = ctx.get('token');
        try{
            let info = await verify(token);
            console.log('info...', info);
        }catch{
            ctx.body = {
                code: -1,
                msg: 'token校验失败'
            }
            return;
        }

        await next(); 
    }
}