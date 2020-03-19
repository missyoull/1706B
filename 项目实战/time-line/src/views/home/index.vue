<template>
    <div class="wrap"> 
        <div>
            <router-view></router-view>
        </div>
        <footer>
            <router-link to="/home/timeline" tag="span">
                <i class="iconfont iconwangluo"></i>
                <span> 圈子</span>    
            </router-link>
            <router-link to="/home/my" tag="span">
                <i class="iconfont iconnanhai"></i>
                <span> 我的</span>
            </router-link>
        </footer>
    </div>
</template>

<style lang="scss" scoped>
.wrap{
    display: flex;
    height: 100%;
    flex-direction: column;
    &>div{
        flex: 1;
        overflow: scroll;
    }
    footer{
        height: 1rem;
        font-size: .32rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-top: 1px solid #999;
        box-sizing: border-box;
    }
    i{
        font-size: .4rem;
    }
    span{
        flex: 1;
        text-align: center;
    }
}

span{
    color: #4F4D4D
}
.router-link-active, .router-link-active span{
    color: #F76968
}
</style>