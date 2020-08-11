import Vue from 'vue';
import App from './App.vue';
import { http } from '@/utils/http';
import iView from 'iview';
import store from '@/store'
import router from '@/router'
import 'iview/dist/styles/iview.css';    // 使用 CSS
import '@/utils/auth'
Vue.use(iView)
Vue.config.productionTip = false;
Vue.prototype.$http = http;
new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount('#app');
