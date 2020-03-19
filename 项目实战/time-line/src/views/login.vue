  
<template>
    <div class="logbox">
        <div class="main">
            <input type="text" placeholder="用户名" v-model="userName" @blur="checkUserName">
            <input type="password" placeholder="登录密码" v-model="userPwd">
            <button @click="login">登录</button>
            <router-link to="/register">没有账号,快速注册</router-link>
        </div>
    </div>
</template>

<script>
import {login} from '@/service/index'
export default {
    data(){
        return {
            userName: '',
            userPwd: ''
        }
    },
    methods: {
        async login(){
            let {userName, userPwd} = this;
            let result = await login({userName, userPwd});
            console.log('result...', result);
            if (result && result.data.code === 1){
                // 登陆完成，执行后续跳转逻辑
                window.sessionStorage.setItem('isLogin', 'true');
                this.$router.replace('/');
            }
            this.$toast(result.data.msg);
        },
        checkUserName(){
            if (!/\w{3,20}/.test(this.userName)){
                this.$toast('请输入正确的用户名');
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
            font-size: .3rem;
        }
        button{
            width: 7rem;
            height: 0.8rem;
            margin-left: .2rem;
            border: none;
            background: #f76968;
            color: #fff;
            font-size: .3rem;
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