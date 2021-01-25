<template>
  <div id="app" :data-theme="theme" class="ichi">
    <router-view></router-view>
  </div>
</template>

<script>
import LayOut from './layout/index';
import { mapMutations, mapState, mapActions } from 'vuex';
export default {
  name: 'App',
  components: {
    LayOut,
  },
  data() {
    return {
      theme:null ,
    };
  },
  mounted(){
    this.theme=this.custom;
    console.log(this.theme)
  },
  watch: {
    custom() {
      //主题更改
      console.log(this.custom);
    },
  },
  computed: {
    ...mapState({
      custom: (state) => state.config.custom,
    }),
    
  },
};
</script>

<style lang="scss">
@import './style/mixins.scss';
@include text-color();
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  // color: #2c3e50;
  height: 100vh;
  width: 100vw;
  // @include base-background();
}
</style>
