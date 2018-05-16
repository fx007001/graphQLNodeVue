import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/index/index'
import courseItem from '@/index/courseItem'
import sign from '@/index/sign'
import register from '@/index/register'

Vue.use(Router)

const router = new Router({
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


// 路由权限控制
router.beforeEach((to, from, next) => {
  var user = window.localStorage.getItem('user')
  if(user){
     next()
   }else{
    if(to.path=='/register' || to.path=='/sign'){
      next();
    }else{
      next('/sign');
      return
    }
  }
})

export default router
