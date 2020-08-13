<template>
  <div class="table">
    <Table :border="false" :loading="loading" :columns="columns" :data="sorce">
      <template v-for="(i, idx) in slots" slot-scope="{ row, index }" :slot="i.slot">
        <div :key="idx">
          <slot :name="i.slot" :data="row"></slot>
        </div>
      </template>
    </Table>
    <Page :current.sync="pageConfig.current" :page-size="pageConfig.pageSize" :total="pageConfig.total" show-elevator @on-change="pageChange" />
  </div>
</template>

<script>
export default {
  props: {
    sorce: {
      required: true,
      type: Array,
      default: [],
    },
    columns: {
      required: true,
      type: Array,
      default: [],
    },
    pageConfig: {
      required: false,
      type: Object,
      default: {
        current: 1,
        total: 100,
        pageSize: 10,
      },
    },
  },
  data() {
    return {
      loading: false,
      slots: [],
      current: 1,
    };
  },
  computed: {},
  watch: {
    columns() {
      this.slots = this.columns.filter((i) => {
        return !!i.slot;
      });
    },
  },
  mounted() {
    this.columns = [...this.columns];
  },
  methods: {
    load(status) {
      //切换加载状态
      if (status) {
        this.loading = false; //强制结束加载状态
        return;
      }
      this.loading = !this.loading;
    },
    pageChange(val) {
      // this.pageConfig.current = val;
      this.$parent.setPage(val);
    },
    initPage() {
      this.pageConfig.current = 1;
    },
  },
};
</script>

<style scoped lang="scss">
.table {
  table {
    width: 100% !important;
  }

  .ivu-page {
    display: flex;
    justify-content: flex-end;
    margin-top: 20px;
  }
}
</style>
