import Vue from 'vue'
import store from '@/store'
//自定义指令
const action = Vue.directive('action', {
  inserted: function (el, binding, vnode) {
    // const actionName = binding.arg
    // const permissions = store.getters.permissions
    // // const elVal = vnode.context.$route.meta.permission
    // // const permissionId = elVal instanceof String && [elVal] || elVal
    // if (permissions && !permissions.includes(actionName)) {
    //   el.parentNode && el.parentNode.removeChild(el) || (el.style.display = 'none')
    // }
  }
})

export default action
