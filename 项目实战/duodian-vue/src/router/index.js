import Vue from 'vue'
import VueRouter from 'vue-router'

// 引入一级路由
import Main from '../views/Main'
import List from '../views/List'
import Edit from '../views/Edit'

// 引入二级路由
import Home from '../views/main/Home'
import Classify from '../views/main/Classify'
import Vip from '../views/main/Vip'
import Cart from '../views/main/Cart'
import My from '../views/main/My'

Vue.use(VueRouter);

const routes = [{
  path: '/',
  redirect: '/main/home'
}, {
  path: '/edit',
  component: Edit
}, {
  path: '/main',
  component: Main,
  children: [{
    path: 'home',
    component: Home
  },{
    path: 'classify',
    component: Classify
  },{
    path: 'vip',
    component: Vip
  },{
    path: 'cart',
    component: Cart
  },{
    path: 'my',
    component: My
  }]
}, {
  path: '/list',
  component: List
},{
  path: '/login',
  component: My
}]


const router = new VueRouter({routes});
export default router;


const whiteList = ['/login'];
router.beforeEach((to, from, next)=>{
  let login = window.localStorage.getItem('login');
  if (login !== 'true'){
    if (whiteList.indexOf(to.path) == -1){
      next('/login');
    }else{
      next();
    }
  }else{
    next();
  }
})

router.afterEach((to, from)=>{

})
