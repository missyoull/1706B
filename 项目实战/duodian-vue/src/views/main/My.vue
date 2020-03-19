<template>
    <!-- <div>我的页面</div> -->
    <button @click="login">登陆</button>
</template>

<script>
export default {
    methods: {
        login(){
            window.localStorage.setItem('login', 'true');
            this.$router.replace('/');
        }
    }
}
</script>