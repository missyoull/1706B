import axios from 'axios';

// 用户注册
export let register = params=>{
    return axios.post('/api/user/register', params);
}

// 用户登陆
export let login = params=>{
    return axios.post('/api/user/login', params);
}

// 获取用户名
export let loginUser = ()=>{
    return axios.get('/api/user/loginUser');
}