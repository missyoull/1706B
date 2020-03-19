import axios from 'axios';

// 获取朋友圈列表
export let showDynamic = ()=>{
    return axios.get('/api/dynamic/showDynamic');
}

// 发布文字朋友圈
export let sendWord = params=>{
    return axios.post('/api/dynamic/sendWord', params);
}

// 发布图片朋友圈
export let sendPicWord = params=>{
    return axios.post('/api/dynamic/sendPicWord', params);
}
