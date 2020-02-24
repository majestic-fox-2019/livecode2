import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import MovieDetail from '../components/MovieDetail.vue'
import AddRating from '../components/AddRating'
import UpdateMovie from '../components/UpdateMovie'
import Ratings from '../components/Ratings'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/detail/:id',
    name: 'MovieDetail',
    component: MovieDetail,
    children: [
      { path: '/rates/:id', name: 'Ratings', component: Ratings },
      { path: '/rates/add/:id', name: 'AddRating', component: AddRating },
      { path: '/update/:id', name: 'UpdateMovie', component: UpdateMovie }
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
