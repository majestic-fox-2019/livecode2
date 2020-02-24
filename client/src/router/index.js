import Vue from 'vue'
import VueRouter from 'vue-router'
import store from "../store"
import Movie from '../views/Movie.vue'
import Rate from '../views/Rate.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    redirect: "/movies"
  },
  {
    path: '/movies',
    name: 'Movie',
    component: Movie
  }, 
  {
    path: "/rate", 
    name: "Rate", 
    component: Rate, 
    beforeEnter: (to, from, next) => {
      if(!store.state.selectedMovie) {
        next("/movies");
      } else {
        next();
      }
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
