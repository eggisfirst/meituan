import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'defaultPage',
      // component: resolve => require(['@/layout/default'], resolve),
      component: () => import('@/layout/default'), //promise函数
      redirect: '/index',
      children: [{
        path: '/index',
        name: 'index',
        component: resolve => require(['@/pages/index'], resolve)
      },{
        path: 's/:name',
        name: 'goods',
        components: resolve => require(['@/pages/goodList'], resolve)
      }]
    },
    {
      path: '/blank',
      name: 'blankPage',
      component: resolve => require(['@/layout/blank'], resolve)
    }
  ]
})
