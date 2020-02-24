import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import DetailMovie from "../views/MovieDetail.vue"
import Category from "../views/Category.vue"
import Search from "../views/Search"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: "/movie/:id",
    name: "detail movie",
    component: DetailMovie
  },
  {
    path: "/category/:category",
    name: "category",
    component: Category
  },
  {
    path: "/search",
    name: "search",
    component: Search
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
