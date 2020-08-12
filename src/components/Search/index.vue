<template>
  <div class="search">
    <Form ref="formInline" :model="formInline" inline>
      <FormItem v-for="(i, idx) in option.items" :key="idx" :label="i.label">
        <tempalte v-if="i.type === 'input'">
          <Input v-if="i.type == 'input'" type="text" v-model="formInline[i.key]" :placeholder="i.tip" />
        </tempalte>
        <tempalte v-if="i.type === 'select'">
          <Select v-model="formInline[i.key]" style="width:130px">
            <Option v-for="item in i.option" :value="item.value" :key="item.value">{{ item.label }}</Option>
          </Select>
        </tempalte>
        <tempalte v-if="i.type == 'date-single'">
          <DatePicker v-model="formInline[i.key]" type="date" placeholder="请选择时间范围" style="width: 200px"></DatePicker>
        </tempalte>
        <tempalte v-if="i.type == 'date-range'">
          <DatePicker v-model="formInline[i.key]" type="daterange" placeholder="请选择时间范围" style="width: 200px"></DatePicker>
        </tempalte>
      </FormItem>
      <FormItem>
        <Button type="primary" @click="handleSubmit()">搜索</Button>
        <Button type="primary" @click="handleSubmit(true)">重置</Button>
      </FormItem>
    </Form>
  </div>
</template>

<script>
export default {
  props: {
    option: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      formInline: {},
    };
  },
  mounted() {
    console.log(this.option);
  },
  methods: {
    handleSubmit(reset) {
      if (reset) {
        this.formInline = {};
        this.$parent.reset();
      } else {
        this.$parent.search(this.formInline);
      }
    },
  },
};
</script>

<style scoped lang="scss">
.search {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  // padding: 16px 10px;
  /deep/ .ivu-form-item-content {
    display: flex;
  }
  .ivu-btn {
    // padding: 0 12px;
    margin-right: 12px;
  }
}
</style>
