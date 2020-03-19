<template>
    <div>
        <router-view/>
        <footer>
            <router-link to="/main/home">配送到家</router-link>
            <router-link to="/main/classify">分类</router-link>
            <router-link to="/main/vip">会员</router-link>
            <router-link to="/main/cart">购物车</router-link>
            <router-link to="/main/my">我的</router-link>
        </footer>
    </div>
</template>