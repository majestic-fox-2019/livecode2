import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Rate from '../views/Rate.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/:id/:title',
    name: 'rating',
    component: Rate
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
