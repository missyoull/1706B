import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

class Footer extends React.Component{
    render(){
        return <footer>
        <Link to="/main/home">配送到家</Link>
        <Link to="/main/clasify">分类</Link>
        <Link to="/main/vip">会员</Link>
        <Link to="/main/cart">购物车
            <span>{this.props.num}</span>
        </Link>
        <Link to="/main/my">我的</Link>
    </footer>
    }
}

const mapStateToProps = state=>{
    return {
        num: state.cart.reduce((total, item)=>{
            if (item.checked){
                total += item.num
            }
            return total;
        }, 0)
    }
}
export default connect(mapStateToProps)(Footer)