import React from 'react'
import {connect} from 'react-redux'
import './more.css'

class More extends React.Component{
    state = {
        showAdd: true
    }

    hideAdd(){
        this.setState({
            showAdd: false
        })
        this.tmpList = this.props.list;
    }

    changeType(id, type){
        this.props.changeType({id, type})
    }  

    cancel(){
        this.props.initialData(this.tmpList);
        this.setState({
            showAdd: true
        })
    }

    finish(){
        this.setState({
            showAdd: true
        })
    }

    render(){
        let {list} = this.props;
        let {showAdd} = this.state;
        // 过滤已拥有的
        let already = list.filter(item=>item.type==1);
        let nothing = list.filter(item=>item.type==0);
        return <div className="more">{
                showAdd?null: <div>
                    <button onClick={()=>this.cancel()}>取消</button>
                    <button onClick={()=>this.finish()}>完成</button>
                </div>
            }
            {
                showAdd?<button onClick={()=>this.hideAdd()}>+</button>:
                <div>
                    <p>未添加</p>
                    <div className="container">{
                        nothing.map((item, index)=>{
                                return <span key={index}  onClick={()=>this.changeType(item.id, item.type)}>{item.title}</span>
                        })
                    }</div>
                </div>
            }
            <div>
                <p>已添加</p>
                <div className="container">{
                    already.map((item, index)=>{
                            return <span key={index} onClick={()=>this.changeType(item.id, item.type)}>{item.title}</span>
                    })
                }</div>
            </div>
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
        },
        changeType: payload=>{
           dispatch({
               type: 'CHANGE_TYPE',
               payload
           })
       }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(More);