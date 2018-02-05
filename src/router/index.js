import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login'
import Favorites from '@/components/favorites'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/favorites',
      name: 'favorites',
      component: Favorites
    }
  ]
})
