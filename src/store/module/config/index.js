//全局样式配置
const state = () => ({
  theme: 'dark', //主题 深色
  isCollapsed: false,
  activeKey: '',
  opened: [],
});

// getters
const getters = {};

// actions
const actions = {};

// mutations
const mutations = {
  SET_TOGGLE(state, value) {
    state.isCollapsed = value;
  },
  SET_THEME(state, value) {
    state.theme = value;
  },
  SET_KEY(state, value) {
    state.activeKey = value;
  },
  SET_OPEN(state, value) {
    state.opened = [value];
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
