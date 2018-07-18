import Vue from 'vue'
import Router from 'vue-router'
import Slider from '@/page/slider'
import Home from '@/page/home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/silder',
      name: 'Slider',
      component: Slider
    }
  ]
})
