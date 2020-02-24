import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/Home/Home.vue'
import DetailMovies from '@/components/Movies/DetailMovies.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/detail/:id',
    name: 'detail',
    component: DetailMovies,
    props: true
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
