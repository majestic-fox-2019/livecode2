import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Detail from '../components/Detail'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/movie/:id',
    name: 'movieDetail',
    component: Detail
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
