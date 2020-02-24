import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import Movie from '../components/Movie'

Vue.use(VueRouter)

const routes = [

  {
    path: '/',
    name: "Movie",
    component: Movie

  }

]

const router = new VueRouter({
  routes
})

export default router
