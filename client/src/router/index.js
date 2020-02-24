import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/movies',
    name: 'Movies',
    component: () => import('../views/Movie.vue'),
  },
  {
    path: '/movies/:id',
    name: 'Movie Detail',
    component: () => import('../views/MovieDetail.vue'),
    children: [
      {
        path: 'edit',
        component: () => import('../views/EditMovie.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
