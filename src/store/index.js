import Vue from 'vue';
import Vuex from 'vuex';
import config from './module/config/index';
import user from './module/user/index';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  modules: {
    config,
    user,
  },
  strict: debug,
  plugins: debug ? [createLogger()] : [],
});
