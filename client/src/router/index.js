import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import MovieDetails from '../views/MovieDetails.vue'
import Ratings from '../views/Ratings.vue'
import RatingFrom from '../views/RatingFrom.vue'
import EditFrom from '../views/EditFrom.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/movies/:id',
    component: MovieDetails,
    children : [
      {
        path : '',
        component : Ratings,
        name : 'ratings'
      },
      {
        path : 'add-rating',
        component : RatingFrom,
        name : 'ratingform'
      },
      {
        path : 'edit',
        component : EditFrom,
        name : 'editform'
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
