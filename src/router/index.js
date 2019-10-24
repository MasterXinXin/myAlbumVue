import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Box from '@/components/vue/box'
import For from '@/components/vue/forTest'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/box',
      name: 'Box',
      component: Box
    },
    {
      path: '/for',
      name: 'For',
      component: For
    }
  ]
})
