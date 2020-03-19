<template>
    <div>
        <p>历史地址</p>
        <ul>
            <li v-for="(item, index) in list" :key="index">
                <input type="checkbox" :checked="item.id==current" @click="updateCurrent(item.id)"/>
                <div>
                    <span>{{item.name}}</span>
                    <span>{{item.phone}}</span>
                    <span>{{item.address+item.detail}}</span>
                </div>
                <button @click="goEdit(item.id)">编辑</button>
            </li>
        </ul>
        <button @click="goEdit()">增加</button>
    </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex'
export default {
    computed: {
        ...mapState({
            list: state=>state.list,
            current: state=>state.current
        })
    },
    mounted(){
        console.log('list...', this.list);
    },
    methods: {
        ...mapMutations({
            updateCurrent: 'updateCurrent'
        }),
        goEdit(id){
            id?this.$router.push('/edit?id='+id):this.$router.push('/edit');
        }
    }
}
</script>

<style lang="scss" scoped>
    
</style>