import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import DetailMovie from "../components/movie.vue"
import RateMovie from "../components/ratemovie.vue"
import NewRate from "../components/newrate.vue"
import AddRate from "../components/newrate.vue"
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: "/movie",
    name: "DetailMovie",
    component: DetailMovie,
  },
  {
    path: "/newrate",
    name: "NewRate",
    component: NewRate
  },
  {
    path: "/ratemovie",
    name: "RatingMovie",
    component: RateMovie
  },
  {
    path: "/addrate",
    name: "AddRate",
    component: AddRate
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
