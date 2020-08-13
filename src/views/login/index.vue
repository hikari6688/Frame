<template>
  <div class="login">
    <div class="form">
      <button @click="login">登陆</button>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex';
export default {
  data() {
    return {};
  },
  methods: {
    ...mapMutations(['SET_ROUTES']),
    login() {
      function getToekn() {
        return new Promise((resolve, reject) => {
          const res = {
            code: 200,
            message: '成功',
            data: {
              token: 'TOKEN_KEY',
              routes: [
                {
                  title: 'app',
                  path: '/',
                  redirect: '/system',
                  name: 'layout',
                  component: 'Layout',
                  meta: { hideMenu: true, hideCrumb: true },
                  children: [
                    {
                      title: '系统设置',
                      path: 'system',
                      name: 'system',
                      component: 'System',
                    },
                    {
                      title: '机构管理',
                      path: 'org',
                      name: 'org',
                      component: 'Org',
                    },
                    {
                      title: '员工管理',
                      path: 'stuff',
                      name: 'stuff',
                      component: 'Stuff',
                      meta: { switch: true },
                      children: [
                        {
                          title: '机构管理1',
                          path: 'org1',
                          name: '1',
                          component: 'Org',
                        },
                        {
                          title: '机构管理2',
                          path: 'org2',
                          name: '2',
                          component: 'Org',
                        },
                        {
                          title: '机构管理3',
                          path: 'org3',
                          name: '3',
                          component: 'Org',
                        },
                      ],
                    },
                    {
                      title: '学生管理',
                      path: 'student',
                      name: 'student',
                      component: 'Student',
                    },
                    {
                      title: '班级管理',
                      path: 'class',
                      name: 'class',
                      component: 'Class',
                    },
                    {
                      title: '考试管理',
                      path: 'exame',
                      name: 'exame',
                      component: 'Exame',
                    },
                    {
                      title: '字典管理',
                      path: 'dictionary',
                      name: 'dictionary',
                      component: 'Dictionary',
                    },
                    {
                      title: '信息发布',
                      path: 'publish',
                      name: 'publish',
                      component: 'Publish',
                    },
                  ],
                },
              ],
            },
          };
          resolve(res);
        });
      }
      getToekn().then((res) => {
        localStorage.setItem('TOKEN_KEY', res.data.token);
        //挂载路由
        this.SET_ROUTES(res.data.routes);
        this.$router.push({
          path: '/',
        });
      });
    },

  },
};
</script>
<style scoped lang="scss">
.login {
  height: 100vh;
  width: 100vw;
  // background-color: lightcyan;
  // background: url('@/assets/images/bg.jpg');
  // background: url('../../assets/images/bg.jpg') no-repeat;
  background-size: 100% 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  .form {
    width: 600px;
    height: 600px;
    margin-left: 50px;
    background-color: lightgoldenrodyellow;
    font-size: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
