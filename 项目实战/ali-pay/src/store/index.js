import {createStore} from 'redux'

let reducer = (state, action)=>{
    // 实现一个深拷贝
    state = JSON.parse(JSON.stringify(state));

    switch(action.type){
        case 'INITIAL_DATA':{
            state.list = action.payload;
        } break;
        case 'CHANGE_TYPE':{
            let index = state.list.findIndex(item=>item.id==action.payload.id)
            state.list[index].type = action.payload.type==1?0:1
        } break;
        default: break;
    }

    return state;
}

let initialState = {
    list: []
}

export default createStore(reducer, initialState);