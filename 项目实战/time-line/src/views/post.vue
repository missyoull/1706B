<template>
    <div>
        <van-cell-group>
            <van-field
                v-model="message"
                rows="3"
                autosize
                label="内容"
                type="textarea"
                maxlength="50"
                placeholder="请输入留言"
                show-word-limit
            />
        </van-cell-group>

        <van-button type="primary" size="large" @click="post">发布</van-button>
    </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
    data(){
        return {
            message: ''
        }
    },
    methods: {
        ...mapActions({
            postTimeline: 'timeline/postTimeline'
        }),
        async post(){
            if (!this.message){
                this.$toast('请输入内容');
                return;
            }

            await this.postTimeline(this.message)
            this.$toast('发布成功');
            window.history.back()
        }
    }
}
</script>