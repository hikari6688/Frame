import { ComponentsMap } from '@/router/mapper.js';
//这个文件用于处理路由和菜单、用户权限(按钮级别)等
export const sortAuth = function(authList) {};

export const makeRoutes = function(routes) {
  const vueRouter = [];
  if (routes.constructor === Array && routes.length) {
    routes.forEach((item, index) => {
      const menu = {
        meta: { title: item.title,...item.meta },
        path: item.path,
        name: item.name,
        component: ComponentsMap[item.component],
        redirect: item.redirect ? item.redirect : null,
      };
      if (item.children && item.children.length) {
        menu.children = [...makeRoutes(item.children)];
      }
      vueRouter.push(menu);
    });
    return vueRouter;
  } else {
    throw new Error('获取路由为空');
  }
};
