import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Box from '@/components/vue/box'
import For from '@/components/vue/forTest'
import goPage from '@/components/vue/goPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/goPage',
      name: 'goPage',
      component: goPage,
      children: [
        {
          path: '/box',
          name: 'box',
          component: Box
        },
        {
          path: '/for',
          name: 'for',
          component: For
        }
      ]
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    }
  ]
})
