<template>
    <div>
        <h1>{{info.title}}</h1>
        <p>{{info.time}}</p>
        <img :src="info.banner" alt="">
        <div>{{info.description}}</div>
        <p>
            <span @click="favor(info.id)">{{`${info.favor}赞同`,}}</span>
            <span>{{`${info.comment}评论`}}</span>
        </p>
    </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex';
import axios from 'axios'
export default {
    computed: {
        ...mapState({
            info: state=>state.info
        })
    },
    methods: {
        ...mapMutations({
            getDetail: 'getDetail',
            favor: 'favor'
        })
    },
    async created(){
        let id = this.$route.params.id;
        // 调用获取详情接口
        this.getDetail(id);
        // let data = await axios.get(`/api/detail?id=${id}`)
        // this.info = data.data;
        // console.log('data...', data);
    }    
}
</script>