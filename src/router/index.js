import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Search from '../views/Search.vue'
import Categories from '../views/Categories.vue'
import Cakes from '../views/Cakes.vue'
import CakeDetailsPage from '../views/CakeDetailsPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/search',
    name: 'Search',
    component: Search
  },
  {
    path: '/categories',
    name: 'Categories',
    component: Categories
  },
  {
    path: '/:category_id/cakes',
    name: 'Cakes',
    component: Cakes,
    props: true,
  },
  {
    path: '/cake/:_id',
    name: 'CakeDetailsPage',
    component: CakeDetailsPage,
    props: true,
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
