<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import LayOut from './layout/index';
export default {
  name: 'App',
  components: {
    LayOut,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
  width: 100vw;
}
</style>
