import Vue from 'vue';
import App from './App.vue';
import { http } from '@/utils/http';
import ViewUI from 'view-design';
import store from '@/store'
import router from '@/router'
import 'view-design/dist/styles/iview.css';
import '@/utils/auth'
Vue.use(ViewUI)
Vue.config.productionTip = false;
Vue.prototype.$http = http;
new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount('#app');
