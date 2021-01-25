<template>
  <div class="head">
    <div class="switch" :class="{ rotate: isCollapsed }" @click="hideMenu">
      <Icon type="md-menu" class="normal" />
    </div>
    <div class="user">
      <div class="color">
        <ColorPicker v-model="color" @on-change="colorChange" />
      </div>
      <div class="avatar-wrap">
        <Dropdown @on-click="clickDrop">
          <div class="avatar">
            <img src="@/assets/images/kotori.jpg" alt="" />
            <span class="name">izumi</span>
            <!-- <img :src="avatar" alt="" /> -->
          </div>
          <DropdownMenu slot="list">
            <DropdownItem name="message">消息中心</DropdownItem>
            <DropdownItem name="reset">重置密码</DropdownItem>
            <DropdownItem name="logout">退出登陆</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState, mapActions } from 'vuex';
export default {
  data() {
    return {
      avatar: '@/assets/images/kotori.jpg',
      color: '#19be6b',
    };
  },
  mounted() {},
  computed: {
    ...mapState({
      isCollapsed: (state) => state.config.isCollapsed,
    }),
  },
  methods: {
    ...mapMutations(['SET_TOGGLE', 'SET_KEY', 'SET_OPEN', 'SET_CUSTOM']),
    ...mapActions(['LOG_OUT']),
    colorChange() {
      this.SET_CUSTOM(this.color);
    },
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
    clickDrop(name) {
      switch (name) {
        case 'message':
          break;

        case 'reset':
          break;
        case 'logout':
          //退出登陆
          this.LOG_OUT().then((r) => {
            localStorage.clear();
            sessionStorage.clear();
            this.$router.replace({
              name: 'login',
            });
          });
          break;
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
    transition: ease all 0.2s;
  }
  .switch {
    transition: ease all 0.2s;
    cursor: pointer;
    .normal {
      font-size: 28px;
    }
  }
  .user {
    // margin-right: 32px;
    cursor: pointer;
    display: flex;
    align-items: center;
    .avatar-wrap {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-left: 80px;
      .avatar {
        img {
          display: block;
          height: 42px;
          width: 42px;
          object-fit: cover;
          border-radius: 50%;
        }
        margin-right: 20px;
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
