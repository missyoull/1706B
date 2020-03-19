import mock from '../mock/mock'

export default (url)=>{
    return new Promise(res=>{
        res(mock[url]())
    })
}