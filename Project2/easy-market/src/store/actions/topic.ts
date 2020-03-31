import {getTopicList} from '../../api'

// 获取专题列表
export let topicAction = ()=>{
    return async (dispatch:Function)=>{
        let data = await getTopicList();
        if (data){
            dispatch({
                type: 'GET_TOPIC_LIST',
                payload: data.data
            })
        }
    }
}
