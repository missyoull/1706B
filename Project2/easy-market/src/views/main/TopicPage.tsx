// import React, {useEffect} from 'react'
// import {connect} from 'react-redux'
// import {topicAction} from '../../store/actions/topic'
// import {RouteComponentProps} from 'react-router-dom'
// import styles from './TopicPage.module.scss'

// interface ItemType{
//     id: number,
//     title: string,
//     price_info: number,
//     subtitle: string,
//     scene_pic_url: string
// }

// interface StateType{
//     list: Array<ItemType>
// }

// interface DisptachType{
//     getTopicList: ()=>void
// }

// class TopicPage extends React.Component<StateType & DisptachType & RouteComponentProps>{
//     componentDidMount(){
//         this.props.getTopicList();
//     }

//     goDetail = (e:React.MouseEvent<HTMLLIElement>)=>{
//         let id = e.currentTarget.dataset.id;
//         this.props.history.push('/topicDetail?id='+id);
//     }

//     render(){
//         return <>{
//             this.props.list.map((item)=>{
//                 return <li key={item.id} onClick={this.goDetail} data-id={item.id}>
//                     <img src={item.scene_pic_url}/>
//                     <p>{item.title}</p> 
//                     <p>{item.subtitle}</p> 
//                     <p>{item.price_info}元起</p> 
//                 </li>
//             })
//         }</>
//     }
// }
// let TopicPage: React.ClassicComponent<DisptachType & StateType & RouteComponentProps> = (props)=>{
//     console.log('props...', props);
//     useEffect(()=>{
//         props.getTopicList();        
//     }, []);

//     let goDetail = (e:React.MouseEvent<HTMLLIElement>)=>{
//         let id = e.currentTarget.dataset.id;
//         props.history.push('/topicDetail?id='+id);
//     }
    
//     return <>{
//         props.list.map((item)=>{
//             return <li key={item.id} onClick={goDetail} data-id={item.id}>
//                 <img src={item.scene_pic_url}/>
//                 <p>{item.title}</p> 
//                 <p>{item.subtitle}</p> 
//                 <p>{item.price_info}元起</p> 
//             </li>
//         })
//     }</>;
// }

// const mapStateToProps = (state:any)=>{
//     return {list: state.topic.list}
// }

// const mapDispatchToProps = (dispatch: Function)=>{
//     return {
//         getTopicList: ()=>{
//             dispatch(topicAction());
//         }
//     }
// }
// export default connect(mapStateToProps, mapDispatchToProps)(TopicPage)


import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import {topicAction} from '../../store/actions/topic'
import {RouteComponentProps} from 'react-router-dom'
import styles from './TopicPage.module.scss'
import {throttle, debounce} from '../../utils/index'


interface ItemType{
    id: number,
    title: string,
    price_info: number,
    subtitle: string,
    scene_pic_url: string
}

interface StateType{
    list: Array<ItemType>
}

interface DisptachType{
    getTopicList: ()=>void
}

let TopicPage: React.FC<DisptachType & StateType & RouteComponentProps> = (props)=>{
    console.log('props...', props);
    // 设置数据
    let [page, setPage] = useState<number>(0);

    useEffect(()=>{
        props.getTopicList();      
    }, []);

    let goDetail = (e:React.MouseEvent<HTMLLIElement>)=>{
        let id = e.currentTarget.dataset.id;
        props.history.push(`/topicDetail/${id}`);
    }
    
    useEffect(()=>{
        // 请求锁
        let flag = false;
        // 第一种方式,监听window的滚动
        let scrollHandle = (e: Event)=>{
            if (flag){
                return;
            }
            let scrollY = (e.currentTarget as Window).scrollY;
            if (document.documentElement.getBoundingClientRect().height - (window.innerHeight + scrollY) < 20){
                // 判断是否已经到底，没有更多数据了
                if (props.list.length <= (page+1)*10){
                    return;
                }
                flag = true;
                setPage(page=>page+1);
                flag = false;
            }
        }
        // 防抖和节流
        let wrapHandle = throttle(scrollHandle);
        window.addEventListener('scroll', wrapHandle);
        return ()=>{
            window.removeEventListener('scroll', wrapHandle);
        }
    }, [props.list]);

    return <>{
        props.list.slice(0, (page+1)*10).map((item)=>{
            return <li key={item.id} onClick={goDetail} className={styles.topicitem} data-id={item.id}>
                <img src={item.scene_pic_url}/>
                <p className={styles.topicItemTitle}>{item.title}</p> 
                <p className={styles.topicItemSubtitle}>{item.subtitle}</p> 
                <p className={styles.topicItemPrice}>{item.price_info}元起</p> 
            </li>
        })
    }</>;
}

const mapStateToProps = (state:any)=>{
    return {list: state.topic.list}
}

const mapDispatchToProps = (dispatch: Function)=>{
    return {
        getTopicList: ()=>{
            dispatch(topicAction());
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(TopicPage)