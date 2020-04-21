import {TruthType} from '../util/types'
import fly from '../util/request'
import jsonp from '../util/jsonp'


const factHost = 'https://fact.txxg.jasonandjay.com'; // '/fact'
// const apiHost = 'https://api.txxg.jasonandjay.com'; // '/api'
const apiHost = 'https://api.inews.qq.com'; // '/api'
// const wechatHost = 'https://wechat.txxg.jasonandjay.com'; // '/fact'
const wechatHost = 'https://wechat.wecity.qq.com'
const inewsHost = 'https://view.inews.qq.com'; // '/fact'


// 获取全国省份列表
export const getHospitalProvince = ()=>{
    return fly.post(`${wechatHost}/api/THPneumoniaService/getHospitalProvince`,{
        service: 'THPneumoniaOuterService',
        args: {req:{}},
        func: 'getHospitalProvince',
        context: {channel: 'AAEEviDRbllNrToqonqBmrER'}
    })
}

// 获取疫情最新进展
export const getTrace = ()=>{
    return jsonp(`${inewsHost}/g2/getOnsInfo?name=wuwei_ww_time_line`);
}

// 最新疫情数据
export const getDisease = ()=>{
    return jsonp(`${inewsHost}/g2/getOnsInfo?name=disease_h5`)
}

// 省份疫情防治列表
export const getProvinceNews = (code: string)=>{
    return fly.post(`${apiHost}/news/v1/province/news/list?province_code=`+code);
}

// 全球疫情数据
export const getGlobalDisease = (name: string)=>{
    return jsonp(`${inewsHost}/g2/getOnsInfo?name=${name}`)
}

// 全球排行
export const getGlobalRank = ()=>{
    return fly.post(`${apiHost}/newsqa/v1/automation/foreign/country/ranklist`);
}

// 实时新闻列表
export const getLastNews = (modules:string='FAutoNewsArticleList')=>{
    return fly.get(`${apiHost}/newsqa/v1/automation/modules/list?modules=${modules}`);
}
