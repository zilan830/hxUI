import Vue from 'vue'
import Router from 'vue-router'
import WebIndex from '@/pages/webIndex.vue'
import Layout from '@/pages/integration/layout.vue'
import Header from '@/pages/integration/header.vue'
import FormItem from '@/pages/integration/formPage.vue'
import TabBar from '@/pages/integration/tabbar.vue'
import TestHome from '@/pages/integration/testPages/home.vue'
import TestApply from '@/pages/integration/testPages/apply.vue'
import TestMe from '@/pages/integration/testPages/me.vue'
import Cell from '@/pages/integration/cell.vue'
import Form from '@/pages/integration/form.vue'
import Group from '@/pages/integration/group.vue'


Vue.use(Router);

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      component: WebIndex,
      meta: {index: '0'},
      redirect: '/layout',
      children: [
        {
          path: '/formitem',
          component: FormItem,
          meta: {index: '01'}
        },
        {
          path: '/layout',
          component: Layout,
          meta: {index: '1'},
        },
        {
          path: '/header',
          component: Header,
          meta: {index: '2'},
        },
        {
          path: '/tabbar',
          component: TabBar,
          meta: {index: '2'},
          redirect:'/testhome',
          children:[
            {
              path:'/testhome',
              component: TestHome,
            },
            {
              path:'/testapply',
              component: TestApply
            },
            {
              path:'/testme',
              component: TestMe
            },
          ]
        },
        {
          path: '/cell',
          component: Cell,
          meta: {index: '3'},
        },
        {
          path: '/group',
          component: Group,
          meta: {index: '4'},
        },
        {
          path: '/form',
          component: Form,
          meta: {index: '5'},
        },
      ]
    },
  ]
})
