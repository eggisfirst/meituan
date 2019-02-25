import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'defaultPage',
      component: resolve => require(['@/layout/default'], resolve)
    },
    {
      path: '/blank',
      name: 'blankPage',
      component: resolve => require(['@/layout/blank'], resolve)
    }
  ]
})
