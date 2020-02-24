import Vue from 'vue';
import VueRouter from 'vue-router';
import Card from '../views/Card.vue';
import Rate from '../views/RateMovie.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Card,
  },
  {
    path: '/rate',
    name: 'Rate',
    component: Rate,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
