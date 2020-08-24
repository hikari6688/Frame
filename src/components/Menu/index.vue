<template>
  <div class="NavMenu">
    <!-- 只有一级菜单 -->
    <template v-for="item in moduleList">
      <template v-if="!item.children">
        <router-link :to="{ name: item.name }" :key="item.name">
          <MenuItem :name="item.name">
            <Icon type="ios-navigate"></Icon>
            <span style="font-size:16px;">{{ item.title }}</span>
          </MenuItem>
        </router-link>
      </template>
      <!-- 有children的渲染下啦菜单 -->
      <template v-else>
        <template v-if="showMenu(item.children) && showMenu(item.children).length">
          <Submenu :name="item.name" :key="item.name">
            <template slot="title">
              <Icon type="ios-navigate"></Icon>
              <span>
                {{ item.title }}
              </span>
            </template>
            <NavMenu :moduleList="[...showMenu(item.children)]" />
          </Submenu>
        </template>
        <template v-else>
          <router-link :to="{ name: item.name }" :key="item.name">
            <MenuItem :name="item.name">
              <Icon type="ios-navigate"></Icon>
              <span style="font-size:16px;">{{ item.title }}</span>
            </MenuItem>
          </router-link>
        </template>
      </template>
    </template>
  </div>
</template>
<script>
import { mapState } from 'vuex';
import { menuFilter } from '@/utils/methods.js';
export default {
  name: 'NavMenu',
  props: ['moduleList'],
  data() {
    return {};
  },
  computed: {
    ...mapState({
      menuList: (state) => state.user.routes[0].children,
    }),
  },
  mounted() {},
  methods: {
    showMenu(data) {
      return menuFilter(data);
    },
  },
};
</script>
<style scoped></style>
