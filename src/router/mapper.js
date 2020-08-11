export const ComponentsMap = {
  Layout: () => import('@/layout/index.vue'),
  System: () => import('@/views/system/index.vue'),
  Org: () => import('@/views/org/index.vue'),
  Stuff: () => import('@/views/stuff/index.vue'),
  Student: () => import('@/views/student/index.vue'),
  Class: () => import('@/views/class/index.vue'),
  Exame: () => import('@/views/exame/index.vue'),
  Dictionary: () => import('@/views/dictionary/index.vue'),
  Publish: () => import('@/views/publish/index.vue'),
};
