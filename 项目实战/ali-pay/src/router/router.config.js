import React from 'react';
// 引入一级路由
import Main from '../views/main'
import More from '../views/more'
// 引入二级路由
import Home from '../views/main/home'

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
            path: '/main/money',
           component: ()=><p>财富</p>
        },{
            path: '/main/mouse',
           component: ()=><p>口碑</p>
        },{
            path: '/main/friend',
           component: ()=><p>朋友</p>
        },{
            path: '/main/my',
           component: ()=><p>我的</p>
        }]
    }, {
        path: '/more',
       component: More
    }]
}