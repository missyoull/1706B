<template>
    <div>
        <div>
            <div>
                <label for="">联系人</label>
                <input type="text" v-model="info.name">
            </div>
            <div>
                <label for="">手机号</label>
                <input type="number" v-model="info.phone">
            </div>
            <div>
                <label for="">地址</label>
                <input type="text" v-model="info.address">
            </div>
            <div>
                <label for="">详细地址</label>
                <input type="text" v-model="info.detail">
            </div>
        </div>
        <button v-if="this.id?true:false" @click="delet">删除</button>
        <button @click="finish">完成</button>
    </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex'
export default {
    computed: {
        ...mapState({
            list: state=>state.list
        }),
        info(){
            if (this.id){
                let index = this.list.findIndex(item=>item.id==this.id)
                if (index !== -1){
                    return this.list[index]
                }
            }
            return  {
                id: '',
                name: '',
                phone: '',
                address: '',
                detail: ''
            }
        }
    },
    created(){
        this.id = this.$route.query.id;
        // 判断是编辑地址还是添加地址
        document.title = this.id?'编辑地址': '添加地址';
    },
    methods: {
        ...mapMutations({
            finishList: 'finishList',
            deleteList: 'deleteList'
        }),
        delet(){
            this.deleteList(this.info.id);
            alert('删除地址成功');
            window.history.back();
        },
        finish(){
            // 判断字段是否合格
            if (!this.info.name){
                alert('请输入联系人')
                return;
            }
            if (!/\d{11}/.test(this.info.phone)){
                alert('请输入正确的手机号')
                return;
            }
            if (!this.info.address){
                alert('请输入联系地址')
                return;
            }
            if (!this.info.detail){
                alert('请输入详细地址')
                return;
            }
            this.finishList(this.info);
            alert('添加地址成功');
            window.history.back();
        }
    }
}
</script>

<style lang="scss" scoped>
    
</style>