import React from 'react';
import {connect} from 'react-redux';
import request from '../../util/request'
import './home.css'

class Home extends React.Component{
    componentDidMount(){
        request('/api/list').then(res=>{
            this.props.initialData(res);
        })
    }

    goDetail(id){
        this.props.history.push('/detail?id='+id);
    }

    addCart(e, item){
        // 阻止事件冒泡
        e.stopPropagation();
        // console.log('item...', item);
        this.props.addCart(item);
    }

    render(){
        let {list} = this.props;
        return <div className="wrap">{
            list.map((item, index)=>{
                return <li key={index} onClick={()=>this.goDetail(item.id)}>
                    <img src={item.image}/>
                    <p>{item.name}</p>
                    <div>
                        <span>${item.money}</span>
                        <button onClick={e=>this.addCart(e, item)}>+</button>
                    </div>
                </li>
            })    
        }</div>;
    }
}

const mapStateToProps = state=>{
    console.log('state...', state);
    return {
        list: state.list
    }
}
const mapDispatchToProps = dispatch=>{
    return {
        initialData: payload=>{
            dispatch({
                type: 'INITIAL_DATA',
                payload
            })
        },
        addCart: payload=>{
            dispatch({
                type: 'ADD_CART',
                payload
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)