<template>
  <Breadcrumb>
    <BreadcrumbItem v-for="(i, idx) in crumbList" :key="idx" :to="idx==0||i.path == currentPath ? '' : i.path">{{ i.meta.title }}</BreadcrumbItem>
  </Breadcrumb>
</template>
<script>
export default {
  data: function() {
    return {};
  },
  mounted() {
  
  },
  computed: {
    crumbList() {
      const data = this.$route.matched.filter((i, idx) => {
        if (!i.meta.hideCrumb) {
          //现实当前层级面包屑
          return i;
        }
      });
      return data;
    },
    currentPath() {
      return this.$route.path;
    },
  },
  methods: {},
};
</script>
