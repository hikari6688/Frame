<template>
  <div class="wrap">
    <div class="layout-crumb">
      <Crumb></Crumb>
    </div>
    <div class="layout-window">
      <Window></Window>
    </div>
  </div>
</template>

<script>
import Window from './Window/index';
import Crumb from '@/components/Crumb/index';
export default {
  components: {
    Window,
    Crumb,
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>

<style scoped lang="scss">
.wrap {
  display: flex;
  flex-direction: column;
  padding-top: 2px;
  .layout-crumb {
    height: 50px;
    background-color: white;
    display: flex;
    align-items: center;
    padding: 0 20px;
  }
  .layout-window {
    flex: 1;
    padding: 30px;
    position: relative;
  }
}
</style>
