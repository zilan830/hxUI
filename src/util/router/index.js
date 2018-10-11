import Vue from 'vue'
import Router from 'vue-router'
//import Index from './../../pages/index.vue'
//import MobileIndex from './../../pages/mobileIndex.vue'
import WebIndex from './../../pages/webIndex.vue'
import Layout from '../../pages/hxUI/layout.vue'
import FormItem from '../../pages/integration/formPage.vue'


Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      component: WebIndex,
      meta: {index: '0'},
      children:[
        {
          path: '/formitem',
          component: FormItem,
          meta: {index: '01'}
        },
      ]
    },
    {
      path: '/layout',
      component: Layout,
      meta: {index: '1'}
    },

  ]
})
