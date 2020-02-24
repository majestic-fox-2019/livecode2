import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/Home/Home.vue'
import Movies from '@/components/Movies/Movies.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/detailmovie/:id',
    name: 'detailmovie',
    components: Movies,
    props: true
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
