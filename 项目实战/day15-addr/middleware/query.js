const connection=require('../db/index.js');

module.exports=()=>{
    return async (ctx,next)=>{
        ctx.mysql={}
        let queryFun=(sql,params=[])=>{
            return new Promise((resolve,reject)=>{
                connection.query(sql,params,(err,data)=>{
                    if(err){
                        reject({msg:'error',err})
                    }else{
                        resolve({msg:'success',data})
                    }
                })
            })
        }
        ctx.mysql.query=queryFun;
        await next();
    }
}