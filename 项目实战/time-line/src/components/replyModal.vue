<template>
    <div v-if="show" class="wrap" @click="hide">
        <div>
            <p>{{title}}</p>
            <input type="text" v-model="content">
            <button @click="reply(content);content=''">确定</button>
        </div>
    </div>
</template>

<script>
import {mapState, mapMutations, mapActions} from 'vuex';

export default {
    data(){
        return {
            content: ''
        }
    },
    computed: {
        ...mapState({
            title: state=>state.replyModal.info.title,
            show: state=>state.replyModal.show
        })
    },
    methods:{
        ...mapMutations({
            hideModal: 'replyModal/hideModal'
        }),
        ...mapActions({
            reply: 'replyModal/reply'
        }),
        hide(e){
            // 利用事件冒泡，判断触发事件的元素和绑定事件的元素
            if (e.target === e.currentTarget){
                this.hideModal();
            }
        }
    }    
}
</script>

<style lang="scss" scoped>
    .wrap{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,.7);
        display: flex;
        align-items: center;
        justify-content: center;
        &>div{
            width: 70%;
            background: #fff;
            border-radius: .1rem;
            overflow: hidden;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
            margin: .3rem 0;
        }
        p{
            font-size: .6rem;
        }
        input{
            width: 70%;
            margin: .5rem 0;
            font-size: .4rem;
            height: .6rem;
        }
        button{
            width: 100%;
            font-size: .5rem;
        }
    }
</style>