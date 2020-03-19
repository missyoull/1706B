import React from 'react'
import {connect} from 'react-redux'

class Cart extends React.Component{

    changeChecked(id){
        this.props.changeChecked(id);
    }

    changeAll(e){
        // console.log('checked...', e.target.checked);
        this.props.changeAll(e.target.checked);
    }

    changeNum(id, type){
        let index = this.props.cart.findIndex(item=>item.id==id)
        let {num, name} = this.props.cart[index];
        if (num == 1 && type == '-'){
            let result = window.confirm('确定要删除'+name+'吗？');
            if (result){
                this.props.changeNum({id, type})
            }
        }else{
            this.props.changeNum({id, type})
        }
    }

    get totalPrice(){
        let price = this.props.cart.reduce((total, item)=>{
            if (item.checked){
                total += item.num*item.money
            }
            return total;
        }, 0);
        return price.toFixed(2)
    }

    render(){
        let {cart} = this.props;
        return <div>
            <header>
                <p>刘于 13683599888</p>
                <p>送至：北京八维教育软工学院 网站</p>
            </header>

            <section>
                <p>
                    <input type="checkbox" checked={cart.every(item=>item.checked)} onChange={e=>this.changeAll(e)}/>
                    多点超市（百旺店）
                </p>
                <ul>{
                    cart.map((item, index)=>{
                        return <li key={index}>
                            <input type="checkbox" checked={item.checked} onChange={()=>this.changeChecked(item.id)}/>
                            <div>
                                <p>{item.name}</p>
                                <p>${item.money}</p>
                            </div>
                            <div>
                                <button onClick={()=>this.changeNum(item.id, '-')}>-</button>
                                <span>{item.num}</span>
                                <button onClick={()=>this.changeNum(item.id, '+')}>+</button>
                            </div>
                        </li>
                    })
                }</ul>
                <p>总价：{this.totalPrice}</p>
            </section>
        </div>
    }
}

const mapStateToProps = state=>{
    return {
        cart: state.cart
    }
}

const mapDispatchToProps = dispatch=>{
    return {
        changeChecked: payload=>{
            dispatch({
                type: 'CHANGE_CHECKED',
                payload
            })
        },
        changeAll: payload=>{
            dispatch({
                type: 'CHANGE_ALL',
                payload
            })
        },
        changeNum: payload=>{
            dispatch({
                type: 'CHANGE_NUM',
                payload
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)