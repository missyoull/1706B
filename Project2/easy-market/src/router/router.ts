import React from 'react';
import {PropType} from '../utils/interface'

// 引入一级路由
// import LoginPage from '../views/LoginPage'
// import FavorPage from '../views/FavorPage'
// import MainPage from '../views/MainPage'
// import GoodsDetailPage from '../views/GoodsDetailPage'
// import TopicDetailPage from '../views/TopicDetailPage'

const LoginPage = React.lazy(() => import('../views/LoginPage'));
const FavorPage = React.lazy(() => import('../views/FavorPage'));
const MainPage = React.lazy(() => import('../views/MainPage'));
const GoodsDetailPage = React.lazy(() => import('../views/GoodsDetailPage'));
const TopicDetailPage = React.lazy(() => import('../views/TopicDetailPage'));



// 引入二级路由
// import IndexPage from '../views/main/IndexPage'
// import CartPage from '../views/main/CartPage'
// import TopicPage from '../views/main/TopicPage'
// import TypePage from '../views/main/TypePage'
// import MyPage from '../views/main/MyPage'

const IndexPage = React.lazy(() => import('../views/main/IndexPage'));
const CartPage = React.lazy(() => import('../views/main/CartPage'));
const TopicPage = React.lazy(() => import('../views/main/TopicPage'));
const TypePage = React.lazy(() => import('../views/main/TypePage'));
const MyPage = React.lazy(() => import('../views/main/MyPage'));



let config = {
    routes: [{
        path: '/login',
        component: LoginPage
    }, {
        path: '/favor',
        component: FavorPage
    }, {
        path: '/topicDetail/:id',
        component: TopicDetailPage
    }, {
        path: '/goodsDetail',
        component: GoodsDetailPage
    }, {
        path: '/main',
        component: MainPage,
        redirect: '/main/index',
        children: [{
            path: '/main/index',
            component: IndexPage
        },{
            path: '/main/topic',
            component: TopicPage
        },{
            path: '/main/type',
            component: TypePage
        },{
            path: '/main/cart',
            component: CartPage
        },{
            path: '/main/my',
            component: MyPage
        }]
    },{
        path: '*',
        redirect: '/main/index'
    }]
}

export default config as PropType