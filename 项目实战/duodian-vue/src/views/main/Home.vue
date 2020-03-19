<template>
    <div>
        <router-link to="/list"> 
            <span>送至:</span>
            <span>{{info && info.address}}</span>
        </router-link>
    </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex'
import axios from 'axios'

export default {
    computed: {
        ...mapState({
            list: state=>state.list,
            current: state=>state.current
        }),
        info(){
            let index = this.list.findIndex(item=>item.id==this.current);
            return this.list[index]
        }
    }
}
</script>

<style lang="scss" scoped>
    
</style>