import React from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import './home.css'

class Main extends React.Component{

    async componentDidMount(){
        let res = await axios.get('/mock/index.json');
        console.log('res...', res);
        this.props.initialData(res.data.list);
    }

    goMore(){
        this.props.history.push('/more')
    }

    render(){
        let {list} = this.props;
        // 过滤已拥有的
        let already = list.filter(item=>item.type==1);
        return <div className="home">{
            already.map((item, index)=>{
                if (index<11){
                    return <span key={index}>{item.title}</span>
                }else {
                    return null
                }
            })
            }<span onClick={()=>this.goMore()}>更多</span>
        </div>
    }
}

let mapStateToProps = state=>{
    console.log('state...', state);
    return {
        list: state.list
    }
}

let mapDispatchToProps = dispatch=>{
    return {
        initialData: payload=>{
            dispatch({
                type: 'INITIAL_DATA',
                payload
            })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Main);