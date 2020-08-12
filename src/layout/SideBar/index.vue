<template>
  <Sider :width="config.sideBarWidth" ref="sider" hide-trigger collapsible :collapsed-width="78" v-model="isCollapsed">
    <IconBox></IconBox>
    <Menu ref="menu" :open-names="[...opened]" :active-name="activeKey" :theme="theme" width="auto" :class="menuitemClasses">
      <ReMenu :moduleList="menuList"></ReMenu>
    </Menu>
  </Sider>
</template>
<script>
import { mapState } from 'vuex';
import ReMenu from '@/components/Menu/index';
import IconBox from './Icon/index';
import config from '@/style/config.scss';
export default {
  data: function() {
    return {};
  },
  components: {
    IconBox,
    ReMenu,
  },
  watch: {
    opened() {
      this.$nextTick(() => {
        this.$refs['menu'].updateOpened();
        this.$refs['menu'].updateActiveName();
      });
    },
  },
  computed: {
    menuitemClasses() {
      return ['menu-item', this.isCollapsed ? 'collapsed-menu' : ''];
    },
    ...mapState({
      isCollapsed: (state) => state.config.isCollapsed,
      menuList: (state) => state.user.routes[0].children,
      theme: (state) => state.config.theme,
      activeKey: (state) => state.config.activeKey, //当前选中的菜单
      opened: (state) => state.config.opened, //当前打开的菜单
    }),
    config() {
      return config;
    },
    route() {
      return this.$route;
    },
  },
  mounted() {},
  methods: {},
};
</script>
<style lang="scss">
.menu-item span {
  display: inline-block;
  overflow: hidden;
  max-width: 120px;
  text-overflow: ellipsis;
  white-space: nowrap;
  vertical-align: bottom;
  transition: width 0.2s ease 0.2s;
  user-select: none;

}
.ivu-menu-item{
  display: flex;
  align-items: center;
  justify-content: center;
}
.ivu-menu-submenu-title{
  font-size: 16px;
}
.menu-item i {
  transform: translateX(0px);
  transition: font-size 0.2s ease, transform 0.2s ease;
  vertical-align: middle;
  font-size: 16px;
}
.collapsed-menu {
  span {
    width: 0px;
    transition: width 0.2s ease;
  }
  .ivu-icon-ios-arrow-down {
    display: none;
  }
}
.collapsed-menu i {
  transform: translateX(5px);
  transition: font-size 0.2s ease 0.2s, transform 0.2s ease 0.2s;
  vertical-align: middle;
  font-size: 22px;
}
</style>
