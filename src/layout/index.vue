<template>
  <Layout>
    <div class="layout">
      <div class="left">
        <SideBar class="layout-side"></SideBar>
      </div>
      <div class="right">
        <Header class="layout-head"></Header>
        <Main class="layout-main"></Main>
      </div>
    </div>
  </Layout>
</template>

<script>
import Header from './Header/index';
import Main from './Main/index';
import SideBar from './SideBar/index';
export default {
  components: {
    Header,
    Main,
    SideBar,
  },
  data() {
    return {};
  },
  mounted() {
   
  },
  methods: {},
};
</script>

<style scoped lang="scss">
@import '@/style/config';
.layout {
  height: 100vh;
  width: 100vw;
  display: flex;
  .left {
    height: 100%;
    background-color: #515a6e;
  }
  .right {
    height: 100%;
    flex: 1;
    display: flex;
    flex-direction: column;
    .layout-head {
      height: $headerHeight;
      display: flex;
      align-items: center;
      background: white;
    }
    .layout-main {
      flex: 1;
      background-color: #f0f2f5;
    }
  }
}
</style>
