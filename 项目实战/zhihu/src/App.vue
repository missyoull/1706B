<template>
  <transition name="fade">
    <router-view></router-view>
  </transition>
</template>

<script>
import axios from 'axios'
export default {
    async created(){
      // let data = await axios.get('/api/list?type=hot&page=1&pageSize=10')
      // console.log('data...', data);

      //  let data1 = await axios.get('/api/list?type=hot&page=2&pageSize=10')
      // console.log('data...', data1);

      //  let data2 = await axios.get('/api/list?type=hot&page=3&pageSize=10')
      // console.log('data...', data2);
    }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
*{
  padding: 0;
  margin: 0;
}
html,body{
  height: 100%;
  // overflow: hidden;
}
html{
  font-size: calc(100vw/750*100);
}
</style>
