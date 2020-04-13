import React from 'react'
import {NavLink} from 'react-router-dom'


interface PropType{
  footers: never [],
  cb: ()=>void
}
let Footer:React.FC<PropType> = ()=>{

  console.log('footer...');
  return  <footer>
      <NavLink to="/main/index">首页</NavLink>
      <NavLink to="/main/topic">专题</NavLink>
      <NavLink to="/main/type">分类</NavLink>
      <NavLink to="/main/cart">购物车</NavLink>
      <NavLink to="/main/my">我的</NavLink>
  </footer>
}

export default Footer;