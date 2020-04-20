import fly from '../util/request'

// 用户登陆
export let login = (code: string)=>{
    return fly.post('/user/code2session', {code})
}