import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import {RouteComponentProps} from 'react-router-dom'
import { typeListAction, subTypeAction } from '../../store/actions/type'
import { CategoryItem, SubCategoryItem } from '../../utils/interface';

interface StateType {
    categoryList: CategoryItem[],
    subCategoryList: SubCategoryItem[]
}

interface DispatchType {
    getTypeList: () => void,
    getSubType: (id: string) => void
}

let TypePage: React.FC<StateType & DispatchType & RouteComponentProps> = props => {

    let [current, setCurrent] = useState<{id:string, wap_banner_url: string}>({id:'', wap_banner_url:''});

    useEffect(() => {
        props.getTypeList();
    }, []);

    useEffect(()=>{
        if (props.categoryList.length){
            let {id, wap_banner_url} = props.categoryList[0];
            setCurrent({
                id,
                wap_banner_url
            })
        }
    }, [props.categoryList]);
    
    let changeItem = (item: CategoryItem)=>{
        setCurrent({
            id: item.id,
            wap_banner_url: item.wap_banner_url
        })
        props.getSubType(item.id);
    }

    let goTypeDetail = (id: string)=>{
        props.history.push(`/typeDetail/${id}`)
    }

    return <>
        <section>{
            props.categoryList.map(item => {
                return <li key={item.id} className={current.id===item.id?'active': ''} onClick={()=>changeItem(item)}>{item.name}</li>
            })
        }</section>
        <section>
            <img src={current.wap_banner_url} alt="" />
            <ul>{
                props.subCategoryList.map(item => {
                    return <li key={item.id} onClick={()=>goTypeDetail(item.id)}>
                        <img src={item.wap_banner_url} alt="" />
                        <span>{item.name}</span>
                    </li>
                })}
            </ul>
        </section>
    </>;
}

const mapStateToProps = (state: any) => {
    return {
        ...state.type
    }
}

const mapDispatchToProps = (dispatch: Function) => {
    return {
        getTypeList: () => {
            dispatch(typeListAction())
        },
        getSubType: (id: string) => {
            dispatch(subTypeAction(id))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(TypePage);