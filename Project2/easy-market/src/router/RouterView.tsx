import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import {PropType} from '../utils/interface'
import {getToken} from '../utils/index'
import { connect } from 'react-redux';
import { userInfoAction } from '../store/actions/user';

interface StateType{
    info: {}
}
interface DispatchType{
    getUserInfo: ()=>void
}
let RouterView: React.FC<PropType & StateType & DispatchType> = props=>{
    return <Switch>{
        props.routes.map((item, index)=>{
            if (item.redirect){
                if (item.path == '*'){
                    return <Redirect key={item.path} to={item.redirect}/>
                // }else{
                //     return <Redirect key={item.path} to={item.redirect} exact from={item.path}/>
                }
            }
            return <Route key={item.path} path={item.path} render={renderProps=>{
                // 路由拦截
                let {match: {path}} = renderProps;
                if (path !== '/login' && path !== '/main' && !getToken()){
                    return <Redirect to={`/login?redirect=${encodeURIComponent(path)}`}/>
                }

                // 如果已经登陆且没有用户信息，就去拉取用户信息
                if (getToken() && !Object.keys(props.info).length){
                    props.getUserInfo();
                }

                                
                if (item.children){
                    return <item.component routes={item.children} {...renderProps}/>
                }else{
                    return <item.component {...renderProps}/>
                }
            }}></Route>
        })
    }</Switch>
}   

const mapStateToProps = (state: any)=>{
    return {
        info: state.user.info
    }
}

const mapDispatchToProps = (dispatch: Function)=>{
    return {
        getUserInfo: ()=>dispatch(userInfoAction())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(RouterView) 