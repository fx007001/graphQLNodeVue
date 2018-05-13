import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/index/index'
import courseItem from '@/index/courseItem'
import sign from '@/index/sign'
import register from '@/index/register'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/courseItem',
      name: 'courseItem',
      component: courseItem
    },
    {
      path: '/sign',
      name: 'sign',
      component: sign
    },
    {
      path: '/register',
      name: 'register',
      component: register
    }
  ]
})
