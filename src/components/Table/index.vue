<template>
  <div class="table">
    <Table height="520" :border="false" :loading="loading" :columns="columns" :data="tableData">
      <template v-for="(i, idx) in slots" slot-scope="{ row, index }" :slot="i.slot">
        <div :key="idx">
          <slot :name="i.slot" :data="row"></slot>
        </div>
      </template>
    </Table>
    <Page :current.sync="pagination.current" :page-size="pagination.pageSize" :total="pagination.total" show-elevator @on-change="pageChange" />
  </div>
</template>

<script>
export default {
  props: {
    sorce: {
      required: true,
      type: () => Promise,
    },
    columns: {
      required: true,
      type: Array,
      default: [],
    },
  },
  data() {
    return {
      loading: false,
      slots: [],
      tableData: [],
      current: 1,
      pagination: {
        current: 1,
        total: 0,
        pageSize: 10,
      },
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
    this.load();
  },
  methods: {
    async load() {
      //切换加载状态

      this.loading = true;
      const data = await this.sorce(this.pagination);
      this.loading = false;
      this.tableData = data.result.data;
      this.pagination.total = data.result.total;
    },
    pageChange(val) {
      this.pagination.current = val;
      this.load();
    },
    refresh() {
      this.pagination.current = 1;
      this.load();
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
