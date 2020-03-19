import React from 'react';
// 引入一级路由
import Main from '../views/main'
// 引入二级路由
import Home from '../views/main/home'
import Cart from '../views/main/cart'

export default {
    routes: [{
        path: '/',
        redirect: '/main/home'
    }, {
        path: '/main',
        component: Main,
        children: [{
            path: '/main/home',
           component: Home
        },{
            path: '/main/clasify',
           component: ()=><p>分类</p>
        },{
            path: '/main/vip',
           component: ()=><p>会员</p>
        },{
            path: '/main/cart',
           component: Cart
        },{
            path: '/main/my',
           component: ()=><p>我的</p>
        }]
    }, {
        path: '/detail',
       component: ()=><p>详情</p>
    }]
}