import {createStore} from 'redux'

let reducer = (state, action)=>{
    // 1.做个深拷贝
    state = JSON.parse(JSON.stringify(state));
    // 2. 处理逻辑
    switch(action.type){
        case 'INITIAL_DATA': {
            state.list = action.payload
        } break;
        case 'ADD_CART': {
            // 1. 判断购物车里有没有当前商品
            let index = state.cart.findIndex(item=>item.id==action.payload.id);
            // 2. 往购物车里添加
            if (index == -1){
                // 2.1 没有，就新加，num置为1
                action.payload.num = 1;
                action.payload.checked = true;
                state.cart.push(action.payload);
            }else{
                // 2.2 已存在，num++
                state.cart[index].num++;
            }
        } break;
        case 'CHANGE_CHECKED': {
            let index = state.cart.findIndex(item=>item.id==action.payload);
            state.cart[index].checked = !state.cart[index].checked;
        } break;
        case 'CHANGE_ALL': {
            state.cart.forEach(item=>{
                item.checked = action.payload;
            })
        } break;
        case 'CHANGE_NUM': {
            let index = state.cart.findIndex(item=>item.id==action.payload.id);
            if (action.payload.type == '+'){
                state.cart[index].num++;
            }else{
                state.cart[index].num--;
                if (state.cart[index].num < 1){
                    state.cart.splice(index, 1);
                }
            }
        } break;
        default: break;
    }

    // 3. 返回state
    return state;
}

let initialState = {
    list: [],
    cart: []
}

export default createStore(reducer, initialState);