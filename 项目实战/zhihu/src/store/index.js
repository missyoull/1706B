import Vue from 'vue'
import Vuex from 'vuex'

import axios from 'axios';
// 日志，记录每一个mutation
import createLogger from 'vuex/dist/logger'


Vue.use(Vuex)

export default new Vuex.Store({
  // 原始数据
  state: {
    list: [],
    info: {}
  },
  // 派生数据 | 计算属性
  getters: {

  },
  // 同步改变，state只允许在mutations里面修改数据
  mutations: {
    updateList(state, payload){
      state.list = payload;
    },
    getDetail(state, payload){
      let info = {};
      let index = state.list.findIndex(item=>item.id==payload);
      if (index !== -1){
        info = state.list[index];
      }
      state.info = info;
    },
    favor(state, payload){
      let index = state.list.findIndex(item=>item.id==payload)
      let info = {...state.list[index]};
      info.favor++;
      state.list[index] = info;
    }
  },
  // 异步操作，处理完异步操作之后，把结果提交到mutation中
  actions: {
    // async表示函数内部有异步操作
    async getList({state, commit}, {type, page}){
      // await表达式的执行结果是后面promise状态变为resolve传递的数据
      let data = await axios.get(`/api/list?type=${type}&page=${page}&pageSize=10`)
      if (page == 1){
          commit('updateList', data.data);
      }else{
          if (data.data.length === 0){
              alert('拉到底了');
          }
          commit('updateList', [...state.list, ...data.data])
      }
    }
  },
  modules: {
  },
  plugins: [createLogger()]
})
