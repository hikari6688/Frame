//这个文件用于处理权限(拦截器处理)
import Vue from 'vue';
import router from '../router/index';
import store from '@/store/index';
import ViewUI from 'view-design';
import { mapState, mapMutations, mapActions } from 'vuex';
Vue.use(ViewUI);
const host = location.host;
// //定义路由的全局拦截
router.beforeEach((to, from, next) => {
  ViewUI.LoadingBar.start();
  if (to && to.name != 'login') {
    const TOKEN = localStorage.getItem('TOKEN_KEY');
    const routes = store.state.user.routes;
    console.log(routes);
    if (!TOKEN) {
      router.replace({
        name: 'login',
      });
    }
    if (!routes || !routes.length) {
      //重新挂获取路由并且加载菜单
      store.dispatch('GET_ROUTES').then((r) => {
        console.log(to);
        next({ ...to });
      });
    } else {
      next();
    }
    if (to.matched && to.name) {
      store.commit('SET_OPEN', to.matched[1].name ? to.matched[1].name : []);
      store.commit('SET_KEY', to.name);
    }
  } else {
    console.log('区主页');
    next();
  }
});

router.afterEach((route) => {
  ViewUI.LoadingBar.finish();
});
