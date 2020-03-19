<template>
    <div class="wrap">
        <header>
            <router-link tag="span" to="/main/home/attention">关注</router-link>
            <router-link tag="span" to="/main/home/recommend">推荐</router-link>
            <router-link tag="span" to="/main/home/hot">热榜</router-link>
        </header>
        <div>
            <transition name="fade">
                <router-view></router-view>
            </transition>
        </div>
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
header{
    height: 1rem;
    font-size: .4rem;
    border-bottom: 1px solid #666;
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
        color: darkorchid;
    }
}
</style>