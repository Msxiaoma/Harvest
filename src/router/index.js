import Vue from 'vue'
import Router from 'vue-router'
import Slider from '@/page/slider'
import Home from '@/page/home'
import PerformanceChart from '@/page/performance_chart'

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
    },
    {
      path: '/test',
      name: 'PerformanceChart',
      component: PerformanceChart
    }
  ]
})
