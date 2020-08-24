import router from '@/router/index';
import { sortMenu, sortAuth, makeRoutes } from '@/utils/generator';
const state = () => ({
  menu: [], //左侧菜单
  auth: [], //用户权限
  hasRoutes: false,
  routes: [], //用户权限路由
});

// getters
const getters = {};

// actions
const actions = {
  LOG_OUT({ commit }) {
    return new Promise((resove, reject) => {
      //调用登陆接口
      setTimeout(() => {
        resove();
      }, 1000);
    });
  },
  GET_ROUTES({ commit }) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const res = [
          {
            title: 'app',
            path: '/',
            redirect: '/system',
            name: 'layout',
            component: 'Layout',
            meta: { showMenu: false, hideCrumb: true },
            children: [
              {
                title: '系统设置',
                path: 'system',
                name: 'systemList',
                component: 'System',
                meta: { showMenu: true,  },
                children: [
                  { path: '', redirect: 'list', meta: { showMenu: false } },
                  { title: '新增系统', path: 'add', name: 'systemAdd', meta: { showMenu: false }, component: 'SystemAdd' },
                  { title: '系统列表', path: 'list', name: 'systemList', meta: { showMenu: false }, component: 'SystemList' },
                ],
              },
              {
                title: '机构管理',
                path: 'org',
                name: 'org',
                component: 'Org',
                meta: { showMenu: true }
              },
              {
                title: '员工管理',
                path: 'stuff',
                name: 'stuff',
                component: 'Stuff',
                meta: { switch: true,showMenu: true },
                children: [
                  {
                    title: '机构管理1',
                    path: 'org1',
                    name: '1',
                    component: 'Org',
                    meta: { showMenu: true }
                  },
                  {
                    title: '机构管理2',
                    path: 'org2',
                    name: '2',
                    component: 'Org',
                    meta: { showMenu: false }
                  },
                  {
                    title: '机构管理3',
                    path: 'org3',
                    name: '3',
                    component: 'Org',
                    meta: { showMenu: true }
                  },
                ],
              },
              {
                title: '学生管理',
                path: 'student',
                name: 'student',
                component: 'Student',
                meta: { showMenu: true }
              },
              {
                title: '班级管理',
                path: 'class',
                name: 'class',
                component: 'Class',
                meta: { showMenu: true }
              },
              {
                title: '考试管理',
                path: 'exame',
                name: 'exame',
                component: 'Exame',
                meta: { showMenu: true }
              },
              {
                title: '字典管理',
                path: 'dictionary',
                name: 'dictionary',
                component: 'Dictionary',
                meta: { showMenu: true }
              },
              {
                title: '信息发布',
                path: 'publish',
                name: 'publish',
                component: 'Publish',
                meta: { showMenu: true }
              },
            ],
          },
        ];
        resolve();
        commit('SET_ROUTES', res);
      }, 0);
    });
  },
};

// mutations
const mutations = {
  SET_AUTH(state, value) {
    //设置用户权限
  },
  SET_ROUTES(state, params) {
    //挂载用户路由
    state.routes = params;
    const _routes = makeRoutes(params);
    router.addRoutes(_routes);
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
