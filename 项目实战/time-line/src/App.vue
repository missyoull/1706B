<template>
  <router-view/>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
html{
  font-size: calc(100vw/750*100)
}
html,body{
  height: 100%;
}
*{
  margin: 0;
  padding: 0;
  list-style: none;
  outline: none;
}
.scale-enter{
    transform: translateX(100%);
    opacity: 0;
}
.scale-leave-to{
    // transform: translateY(-100%);
    // opacity: 0;
}
.scale-enter-active,.scale-leave-active{
    transition: all .5s ease;
}
</style>
