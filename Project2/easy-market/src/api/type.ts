import axios from '../utils/request'

// 获取分类列表
export let getTypeList = ()=>{
    return axios.get('/catalog/index')
}

// 获取专题详情
export let getSubType = (id: string)=>{
    return axios.get(`/catalog/current?id=${id}`)
}