export const asyncRoutes = [
  {
    path: '/system',
    name: '系统设置',
    component: () => import('@/views/system/index.vue'),
  },
  {
    path: '/org',
    name: '机构管理',
    component: () => import('@/views/org/index.vue'),
  },
  {
    path: '/stuff',
    name: '员工管理',
    component: () => import('@/views/stuff/index.vue'),
  },
  {
    path: '/student',
    name: '学生管理',
    component: () => import('@/views/student/index.vue'),
  },
  {
    path: '/class',
    name: '班级管理',
    component: () => import('@/views/class/index.vue'),
  },
  {
    path: '/exame',
    name: '考试管理',
    component: () => import('@/views/exame/index.vue'),
  },
  {
    path: '/dictionary',
    name: '字典管理',
    component: () => import('@/views/dictionary/index.vue'),
  },
  {
    path: '/publish',
    name: '信息发布',
    component: () => import('@/views/publish/index.vue'),
  },
];
