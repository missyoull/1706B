import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    list: [],
    current: 1
  },
  mutations: {
    updateList(state, payload){
      console.log('payload...', payload);
      state.list = payload;
    },
    updateCurrent(state, payload){
      state.current = payload;
    },
    deleteList(state, payload){
      let index = state.list.findIndex(item=>item.id==payload)
      state.list.splice(index, 1);
      console.log('list...', state.list)
    },
    finishList(state, payload){
      if (payload.id){
        // 有id，更新
        let index = state.list.findIndex(item=>item.id==payload.id)
        state.list[index] = payload;
      }else{
        // 没有id，追加
        payload.id = state.list.length+1;
        state.list.push(payload);
      }
    }
  }
})
