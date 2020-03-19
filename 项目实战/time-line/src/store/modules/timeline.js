import {showDynamic, sendWord} from '../../service/index'

const state = {
    list: []
}

const mutations = {
    updateList(state, payload){
        state.list = payload.reverse();
    }
}

const actions = {
    // 获取朋友圈列表
    async getTimeline(context, payload){
        let data = await showDynamic();
        console.log('data....', data);
        context.commit('updateList', data.data.data);
    },

    // 发布朋友圈
    async postTimeline(context, payload){
        let data = await sendWord({dynamicContent: payload});
        console.log('data...', data);
    }
}

export default{
    namespaced: true,
    state,
    mutations,
    actions
}