import Vue from 'vue'
import VueRouter from 'vue-router'

// 一级路由
import Main from '@/views/main.vue'
import Detail from '@/views/detail.vue'

// 二级路由
import Home from '@/views/main/home.vue'
import Edu from '@/views/main/edu.vue'
import Idea from '@/views/main/idea.vue'
import Message from '@/views/main/message.vue'
import My from '@/views/main/my.vue'

// 三级路由
import Type from '@/views/main/home/type.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/main/home/attention'
  },
  {
    path: '/detail/:id?',
    component: Detail
  },
  {
    path: '/main',
    component: Main,
    children: [{
      path: '/main/home',
      redirect: '/main/home/attention',
      component: Home,
      children: [{
        path: '/main/home/:type',
        component: Type
      }]
    },{
      path: '/main/edu',
      component: Edu
    },{
      path: '/main/idea',
      component: Idea
    },{
      path: '/main/message',
      component: Message
    },{
      path: '/main/my',
      component: My
    }]
  }
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
