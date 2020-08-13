<template>
  <div class="window">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>

<style scoped lang="scss">
.window {
  background-color: white;
  overflow: auto;
  padding: 28px;
  position: absolute;
  left:30px;
  right: 30px;
  top: 30px;
  bottom: 30px;
}
</style>
