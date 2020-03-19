import axios from 'axios';

// 回复朋友圈
export let publishReply = params=>{
    return axios.post('/api/commentreply/publishreply', params);
}

// 回复朋友圈的评论
export let publishComment = params=>{
    return axios.post('/api/commentreply/publishcomment', params);
}