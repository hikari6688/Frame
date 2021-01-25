//全局样式配置
const state = () => ({
  theme: 'dark', //主题 深色
  isCollapsed: false,
  activeKey: '',
  opened: [],
  custom: '#2d8cf0', //自定义主题颜色
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
  SET_CUSTOM(state, value) {
    state.custom = value;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
