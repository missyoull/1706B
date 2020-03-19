import React from 'react'
import RouterView from '../router/RouterView'
import {Link} from 'react-router-dom'

class Main extends React.Component{
    render(){
        return <>
            <RouterView routes={this.props.routes}></RouterView>
            <footer>
                <Link to="/main/home">首页</Link>
                <Link to="/main/money">财富</Link>
                <Link to="/main/mouse">口碑</Link>
                <Link to="/main/friend">朋友</Link>
                <Link to="/main/my">我的</Link>
            </footer>
        </>
    }
}

export default Main;