import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { RouteComponentProps } from 'react-router'
import { uploadAvatarAction, updateAvatarAction,logoutAction } from '../../store/actions/user'
import { Toast } from 'antd-mobile';

interface StateType {
    info: {
        avatar: string,
        username: string
    },
    uploadAvatar: string
}

interface DispatchType {
    changeAvatar: (form: FormData)=>void,
    updateAvatar: (avatar: string)=>void,
    logout: ()=>void
}

let MyPage: React.FC<StateType & DispatchType & RouteComponentProps> = props => {
    let fileChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
        let file = e.target.files? e.target.files[0]: null;
        if (file){
            let form = new FormData();
            form.append(file.name, file);
            props.changeAvatar(form);
        }
    }

    let updateAvatar = ()=>{
        if (props.uploadAvatar){
            props.updateAvatar(props.uploadAvatar)
        }else{
            Toast.info('请先上传你的头像');
        }
    }

    let logout = ()=>{
        props.logout();
        props.history.replace(`/login?redirect=${encodeURIComponent('/main/my')}`);
    }

    return <>
        <div>
            <img src={props.uploadAvatar?props.uploadAvatar:props.info.avatar} alt="" />
            <input type="file" onChange={fileChange}/>
        </div>
        <span>{props.info.username}</span>
        <button onClick={updateAvatar}>确定</button>
        <button onClick={logout}>退出登陆</button>
    </>;
}

const mapStateToProps = (state: any) => {
    return state.user
}
const mapDisptachToProps = (dispatch: Function) => {
    return {
        updateAvatar: (avatar: string) => {
            dispatch(updateAvatarAction(avatar))
        },
        changeAvatar: (form: FormData) => {
            dispatch(uploadAvatarAction(form))
        },
        logout: () => {
            dispatch(logoutAction())
        }
    }
}

export default connect(mapStateToProps, mapDisptachToProps)(MyPage);