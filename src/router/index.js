import Vue from 'vue'
import Router from 'vue-router'

//Components
import Home from '@/components/home/home'
import Timeline from '@/components/history'
import Product from '@/components/product/product'

Vue.use(Router)

const VueRouter = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/product',
      name: 'Product',
      component: Product
    },
    {
      path: '/history',
      name: 'History',
      component: Timeline
    }
  ]
})

export default VueRouter

