<template>
  <div class="login">
    <button @click="login">登陆</button>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex';
export default {
  data() {
    return {};
  },
  mounted() {},
  computed: {
    ...mapState({
      routes: (state) => state.user.routes,
    }),
  },
  methods: {
    login() {
      function getToekn() {
        return new Promise((resolve, reject) => {
          const res = {
            code: 200,
            message: '成功',
            data: {
              token: 'TOKEN_KEY',
            },
          };
          resolve(res);
        });
      }
      getToekn().then((res) => {
        localStorage.setItem('TOKEN_KEY', res.data.token);
        this.$router.push({
          path: '/',
        });
      });
      //挂载路由
      this.SET_ROUTES(this.routes);
      //设置菜单
    },
    ...mapMutations(['SET_ROUTES']),
  },
};
</script>
<style scoped lang="scss"></style>
