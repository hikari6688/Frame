### 框架使用说明

> 目录说明

|    目录    |           说明           |
| :--------: | :----------------------: |
|   assets   |         存放图片         |
| components |        封装的组件        |
|   config   |  全局的配置(样式配置等)  |
|   layout   |       页面骨架组件       |
|   router   |           路由           |
|   store    | 存放全局数据(用户信息等) |
|   style    |     可复用的公共样式     |
|   utils    |      封装的一些方法      |
|    view    | 主视口要渲染的页面丢这里 |
     
> 样式
     
  左侧菜单栏贯通，Header上的按钮可收缩和展开菜单，中间是路由主视口。使用flex弹性布局，主视口在显示Table组件时，左侧菜单收缩后会拉升Table尺寸，展开菜单主视口宽度会比变长出现滚动条，改成绝对定位布局解决了这个问题，头部按钮展开和收缩菜单组件间的通信通过vuex完成。

> 路由处理

   项目采用动态路由，路由由后端返回，前端根据返回的路由表通过递归函数处理成vue router需要的格式，Router文件中的constantRouts.js只配置不需要权限的路由，比如登陆和404，或者开放的主页等，剩下的路由在调用后端路由接口后通过addroutes挂载生成路由，考虑到安全问题，返回的路由表不存储在Localstorage中，而是存放在store中供其他组件使用，需要后端提供专门获取路由的接口(token做验证)。在前端页面刷新时，通过路由全局守卫判断当前store中是否存在动态获取的routes，如果不存在，则再拉去一次路由表并处理挂载路由，成功挂载后释放路由守卫钩子。

```javascript
//处理路由的函数，在做路由配置时为了方便配置，component用的是命名路由，命名映射文件在router/mapper.js中
export const makeRoutes = function(routes) {
  const vueRouter = [];
  if (routes.constructor === Array && routes.length) {
    routes.forEach((item, index) => {
      const menu = {
        meta: { title: item.title, ...item.meta },
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

//路由拦截

router.beforeEach((to, from, next) => {
  ViewUI.LoadingBar.start();
  if (to && to.name != 'login') {
    const TOKEN = localStorage.getItem('TOKEN_KEY');
    const routes = store.state.user.routes;
    if (!TOKEN) {
      location.replace(`${host}/login`);
    }
    if (!routes || !routes.length) {
      //重新挂获取路由并且加载菜单
      store.dispatch('GET_ROUTES').then((r) => {
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
    next();
  }
});
```

> 菜单处理

   左侧的菜单可能涉及到多层级关系，所以需要自动判断层级生产下拉菜单，这里采用递归组件实现，代码实现见components/menu。考虑到用户在当前页面刷新，或者跳转到一个子菜单时需要自动展开菜单并高亮当前页面所在菜单，所以在路由拦截时将当前页面的信息放在store中，然后给Menu组件提供opened和active，展开和高亮菜单。点击菜单时为了方便使用，所以路由都提供了name属性，直接根据路由名跳转路由。

> 业务组件封装

目前只针对 table 组件做了封装，实现配置实现 table 和 table 上的搜索筛选项，具体配置见下,搜索项。

```javascript
    //组件通过遍历searchOpt中的items获取要展示的项
    searchOpt: {
      reset: true,
      items: [
        {
          type: 'input',//类型 目前只提供输入框，下拉，时间选择
          label: '姓名',//表单的label
          tip: '请输入姓名',//placeholder
          key: 'name',//字段名
          style: { width: '50px' },//自定义样式
          clearble: true,//是否设置clearble
        },
        {
          type: 'select',
          label: '国籍',
          tip: '请选择',
          key: 'nation',
          option: [], //下拉栏的配置项
        },
        {
          type: 'date',
          label: '时间',
          tip: '请选择时间',
          key: 'date',
        },
        {
          type: 'range',
          label: '时间',
          tip: '请选择时间',
          key: 'time',
        },
      ],
    },

    //提供插槽展示在这个搜索项的上面，主要是应用于新增,下载excel等功能，表格行的尾端也提供插槽，适用于编辑，删除等，通过slot传递每一行row的数据，实例代码如下
    <template>
      <div class="class">
        <iSearch :option="searchOpt">
          <template v-slot:custom>
            <Button type="primary">新增</Button>
            <Button type="primary">导出Excel</Button>
          </template>
        </iSearch>
        <iTable ref="table" :sorce="data" :columns="columns">
          <template v-slot:action="scope">
            <Button type="primary" size="small" style="margin-right: 5px" @click="show(scope)">View</Button>
            <Button type="error" size="small" @click="remove(scope)">Delete</Button>
          </template>
          <template v-slot:switch="scope">
            <Button type="primary" size="small" style="margin-right: 5px" @click="show(scope)">View</Button>
            <Button type="error" size="small" @click="remove(scope)">Delete</Button>
          </template>
        </iTable>
      </div>
    </template>

```

> 环境配置

   .env结尾的文件用于配置环境变量，.env中的环境变量会在所有环境中加载，.env.   prodection只在生产环境加载，.env.development只在开发环境中加载


 ```dart
  NODE_ENV=production
  PORT=3000 //配置当前环境的运行端口
  VUE_APP_API=  //vue cli的内部环境变量必须是以VUE_APP_开头
  ```