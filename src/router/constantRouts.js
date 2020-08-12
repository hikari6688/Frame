import { asyncRoutes } from './asyncRouts';
import { ComponentsMap  } from './mapper'
export const constantRouts = [
  // {
  //   path: '/',
  //   name: 'app',
  //   component: ComponentsMap.Layout,
  //   redirect: '/system',
  //   children: asyncRoutes,
  // },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index.vue'),
  },
];
