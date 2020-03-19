const koa=require('koa');
const app=new koa();
const router=require('./router/index.js');
const bodyparser=require('koa-bodyparser');
const path=require('path');
const query=require('./middleware/query.js');
const static=require('koa-static');

app.use(static(path.join(process.cwd(),'publish')))

app.use(bodyparser());

app.use(query());

app.use(router.routes());

app.listen(process.env.PORT||3000,()=>{
    console.log('port is 3000')
})