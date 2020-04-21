import fly from '../util/request'

const signHost = 'https://sign.jasonandjay.com';

// 用户登陆
export let login = (code: string)=>{
    return fly.post(`${signHost}/user/code2session`, {code})
}