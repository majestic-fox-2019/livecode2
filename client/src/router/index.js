import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import DetailMovie from "../components/moviedetail.vue"
import RateMovie from "../components/ratemovie.vue"
import NewRate from "../components/newrate.vue"
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: "ratemovie",
    name: "RatingMovie",
    component: RateMovie
  },
  {
    path: "newrate",
    name: "NewRate",
    component: NewRate
  },
  {
    path: "/detailmovie",
    name: "DetailMovie",
    component: DetailMovie,
  },


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
