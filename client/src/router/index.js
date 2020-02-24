import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import MovieDetail from '../views/MovieDetail.vue';
import EditMovie from '../components/EditMovie.vue';
import RateMovie from '../components/RateMovie.vue';
import RateList from '../components/RateList.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/movie/:id',
    name: 'Movie Detail',
    component: MovieDetail,
    props: true,
    children: [
      {
        path: 'edit',
        name: 'Edit Movie',
        component: EditMovie
      },
      {
        path: 'rate',
        name: 'Rate Movie',
        component: RateMovie
      },
      {
        path: 'ratings',
        name: 'Rate List',
        component: RateList,
        props: true
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
