<template>
    <div class="logbox">
        <div class="header">
            <p> <span>back</span>圈子注册</p>
        </div>
        <div class="main">
            <input type="text" placeholder="用户名" v-model="userName">
            <input type="password" placeholder="登录密码" v-model="userPwd">
            <button @click="register">注册</button>
        </div>
    </div>
</template>

<script>
import {register} from '@/service/index'

export default {
    data(){
        return {
            userName: '',
            userPwd: ''
        }
    },
    methods: {
        async register(){
            let {userName, userPwd} = this;
            let result = await register({userName, userPwd})
            console.log('result...', result);
            if (result && result.data.code === 0){
                alert(result.data.msg)
            }else{
                window.history.back();
            }
        }
    }
}
</script>


<style lang="scss" scoped>
.logbox{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    .header{
        width: 100%;
        height: .8rem;
        background: #eee;
        span{
            float: left;
        }
        p{
            font-size: .32rem;
            text-align: center;
            line-height: .8rem;
        }
        
    }
    .main{
        width: 100%;
        flex: 1;
        input{
            width: 7rem;
            height: .8rem;
            margin-left: .2rem;
            border: none;
            background: #f2f2f2;
        }
        button{
            width: 7rem;
            height: 0.8rem;
            margin-left: .2rem;
            border: none;
            background: #f76968;
            color: #fff;
        }
        a{
            display: block;
            font-size: .28rem;
            color: #101010;
            margin-top: .3rem;
            margin-left: .2rem;
        }
    }
}
</style>