<template>
  <div class="class">
    <iSearch :option="searchOpt">
      <template v-slot:custom>
        <Button type="primary">新增</Button>
        <Button type="primary">导出Excel</Button>
      </template>
        <template v-slot:extra>
          <FormItem label='这是插槽哦:'>
        <Input  type="text" v-model="slot" placeholder="这是插槽" />
         </FormItem> 
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

<script>
import iTable from '@/components/Table/index';
import iSearch from '@/components/Search/index';
export default {
  components: {
    iTable,
    iSearch,
  },
  data() {
    return {
      data: [], //table数据源
      slot:'',
      searchOpt: {
        reset: true,
        items: [
          {
            type: 'input',
            label: '姓名',
            tip: '请输入姓名',
            key: 'name',
            style: { width: '120px' },
            clearble: true,
          },
          {
            type: 'select',
            label: '国籍',
            tip: '请选择',
            key: 'nation',
             style: { width: '120px' },
            option: [
              {
                value: 'New York',
                label: 'New York',
              },
              {
                value: 'London',
                label: 'London',
              },
              {
                value: 'Sydney',
                label: 'Sydney',
              },
              {
                value: 'Ottawa',
                label: 'Ottawa',
              },
              {
                value: 'Paris',
                label: 'Paris',
              },
              {
                value: 'Canberra',
                label: 'Canberra',
              },
            ],
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
      columns: [
        {
          title: 'Name',
          key: 'name',
          align: 'center',
        },
        {
          title: 'Age',
          key: 'age',
          align: 'center',
        },
        {
          title: 'Address',
          key: 'address',
          align: 'center',
        },
        {
          title: 'Action',
          slot: 'action',
          align: 'center',
        },
        {
          title: 'Switch',
          slot: 'switch',
          align: 'center',
        },
      ],
    };
  },
  mounted() {
    this.getList();
  },
  methods: {
    show(value) {
      console.log(value);
    },
    remove(value) {
      console.log(value);
    },
    setPage(page) {
      //分页变化
      this.getList();
    },
    search(config) {
      //点击搜索选项
      const params = { ...config };
      console.log(params);
    },
    reset() {
      //点击重置选项
      this.$refs['table'].initPage();
      this.getList();
    },
    getList() {
      //获取表格要渲染的list
      this.$refs['table'].load();
      setTimeout(() => {
        const res = {
          code: 200,
          message: 'success',
          result: {
            data: [
              {
                name: 'John Brown',
                age: 18,
                address: 'New York No. 1 Lake Park',
                date: '2016-10-03',
              },
              {
                name: 'Jim Green',
                age: 24,
                address: 'London No. 1 Lake Park',
                date: '2016-10-01',
              },
              {
                name: 'Joe Black',
                age: 30,
                address: 'Sydney No. 1 Lake Park',
                date: '2016-10-02',
              },
              {
                name: 'Jon Snow',
                age: 26,
                address: 'Ottawa No. 2 Lake Park',
                date: '2016-10-04',
              },
               {
                name: 'Jon Snow',
                age: 26,
                address: 'Ottawa No. 2 Lake Park',
                date: '2016-10-04',
              },
               {
                name: 'Jon Snow',
                age: 26,
                address: 'Ottawa No. 2 Lake Park',
                date: '2016-10-04',
              },
               {
                name: 'Jon Snow',
                age: 26,
                address: 'Ottawa No. 2 Lake Park',
                date: '2016-10-04',
              },
               {
                name: 'Jon Snow',
                age: 26,
                address: 'Ottawa No. 2 Lake Park',
                date: '2016-10-04',
              },
               {
                name: 'Jon Snow',
                age: 26,
                address: 'Ottawa No. 2 Lake Park',
                date: '2016-10-04',
              },
               {
                name: 'Jon Snow',
                age: 26,
                address: 'Ottawa No. 2 Lake Park',
                date: '2016-10-04',
              },
               {
                name: 'Jon Snow',
                age: 26,
                address: 'Ottawa No. 2 Lake Park',
                date: '2016-10-04',
              },
            ],
            total: 32,
            pageNo: 1,
          },
        };
        this.data = res.result.data;
        this.$refs['table'].load();
      }, 1000);
    },
  },
};
</script>

<style scoped lang="scss">
.class {
}
</style>
