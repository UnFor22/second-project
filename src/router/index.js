import Vue from 'vue'
import Router from 'vue-router'

import main from '../views/Layout/index.vue'

Vue.use(Router)
import home from '../components/home.vue'

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: home,
      meta: {
        title: '首页'
      }
    }, 
    {
      path: 'about/:id',
      component: () => import('../components/about'),
      name: '详情',
    }, 
    {
      path: '/main',
      component: ()=> import('../views/Layout'),
      redirect: '/main/home',
      children:[
        {
          path: 'home',
          component: home,
          name: 'home1',
          meta: {
            title: '首页'
          }
        },
        {
          path: 'about/:id',
          component: () => import('../components/about'),
          name: '详情1',
        }
      ]
    }
  ]
})
