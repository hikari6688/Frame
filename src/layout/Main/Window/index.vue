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
  height: 100%;
  width: 100%;
  background-color: white;
  overflow: auto;
}
</style>
