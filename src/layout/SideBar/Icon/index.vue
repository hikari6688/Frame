<template>
  <div class="side-icon" :class="{ hide: isCollapsed }">
    <img src="@/assets/icons/owl.png" alt="" />
    <span>FRAME</span>
  </div>
</template>

<script>
import styles from '@/style/config.scss';
import { mapState } from 'vuex';
export default {
  data() {
    return {};
  },
  mounted() {
    console.log(this.isCollapsed);
  },
  computed: {
    ...mapState({
      isCollapsed: (state) => state.config.isCollapsed,
    }),
  },
  methods: {},
};
</script>

<style scoped lang="scss">
@import '@/style/config';
 .hide {
    span {
      display: none !important; 
      transition: ease all 0.5s;
    }
  }
.side-icon {
  height: $headerHeight;
  width: 100%;
  background-color: #535a6c;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  transition: ease all 0.5s;
  
  span {
    font-size: 28px;
    font-weight: 600;
      margin-left: 6px;
      user-select: none;
  }
  img{
    display: block;
    width: 32px;
    height: 32px;
    object-fit: cover;
    user-select: none;
  }
 
}
</style>
