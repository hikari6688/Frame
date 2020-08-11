<template>
  <div class="head">
    <div class="switch" :class="{ rotate: isCollapsed }" @click="hideMenu">
      <Icon type="md-menu" class="normal" />
    </div>
    <div class="user">
      <Dropdown>
        <div class="avatar">
          <img src="@/assets/images/kotori.jpg" alt="" />
          <!-- <img :src="avatar" alt="" /> -->
        </div>
        <span class="name">ichiko</span>
        <DropdownMenu slot="list">
          <DropdownItem>消息中心</DropdownItem>
          <DropdownItem>退出登陆</DropdownItem>
          <DropdownItem>重置密码</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex';
export default {
  data() {
    return {
      avatar: '@/assets/images/kotori.jpg',
    };
  },
  mounted() {},
  computed: {
    ...mapState({
      isCollapsed: (state) => state.config.isCollapsed,
    }),
  },
  methods: {
    ...mapMutations(['SET_TOGGLE', 'SET_KEY', 'SET_OPEN']),
    hideMenu() {
      this.SET_TOGGLE(!this.isCollapsed);
      if (this.isCollapsed) {
        //收缩
        this.SET_KEY(null);
        this.SET_OPEN([]);
      } else {
        //展开
        const to = this.$route;
        this.$store.commit('SET_OPEN', to.matched[1].name ? to.matched[1].name : []);
        this.$store.commit('SET_KEY', to.name);
      }
    },
  },
};
</script>

<style scoped lang="scss">
.head {
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  .rotate {
    transform: rotate(-90deg);
    transition: linear all 0.2s;
  }
  .switch {
    transition: linear all 0.2s;
    cursor: pointer;
    .normal {
      font-size: 28px;
    }
  }
  .user {
    margin-right: 32px;
    cursor: pointer;

    .avatar {
      img {
        display: block;
        height: 42px;
        width: 42px;
        object-fit: cover;
        border-radius: 50%;
      }
    }
  }
  /deep/ .ivu-dropdown-menu {
    .ivu-dropdown-item {
      cursor: pointer;
    }
  }
}
</style>
