<template>
	<div>
		<p>我的第一个uniapp应用</p>
	</div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      title: "Hello"
    };
  },
  onLoad() {},
  methods: {}
});
</script>

<style>
.content {
  text-align: center;
  height: 400upx;
}
.logo {
  height: 200upx;
  width: 200upx;
  margin-top: 200upx;
}
.title {
  font-size: 36upx;
  color: #8f8f94;
}
</style>
