<template>
    <div class="wrap">
        <div>
            <transition name="fade">
                <router-view></router-view>
            </transition>
        </div>
        <footer>
            <router-link tag="span" to="/main/home">首页</router-link>
            <router-link tag="span" to="/main/idea">想法</router-link>
            <router-link tag="span" to="/main/edu">大学</router-link>
            <router-link tag="span" to="/main/message">消息</router-link>
            <router-link tag="span" to="/main/my">我的</router-link>
        </footer>
    </div>
</template>

<style lang="scss" scoped>
.wrap{
    height: 100%;
    display: flex;
    flex-direction: column;
    &>div{
        flex: 1;
        overflow: auto;
    }
}
footer{
    height: 1rem;
    font-size: .4rem;
    border-top: 1px solid #666;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-around;
    span{
        height: 100%;
        width: 20%;
        text-align: center;
        line-height: 1rem;
    }
    span.router-link-active{
        color: palevioletred;
    }
}
.fade-enter{
    transform: translateY(100%);
    opacity: 0;
}
.fade-leave-to{
    transform: translateY(-100%);
    opacity: 0;
}
.fade-enter-active,.fade-leave-active{
    transition: all .3s linear;
}
</style>